const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const config = require('../configs/auth.config');
const User = require('../models/user.schema');

exports.signup = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).send({ 
        message: "All fields are required!" 
      });
    }


    if (password.length < 6) {
      return res.status(400).send({ 
        message: "Password must be at least 6 characters long!" 
      });
    }

  
    if (password !== confirmPassword) {
      return res.status(400).send({ 
        message: "Passwords do not match!" 
      });
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({ 
        message: "Invalid email format!" 
      });
    }

    const user = new User({
      username,
      email,
      password: bcrypt.hashSync(password, 8)
    });

    await user.save();

    res.status(200).send({
      message: "User was registered successfully!",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Signup Error:", error);
    
    
    if (error.code === 11000) {
      if (error.keyPattern.username) {
        return res.status(400).send({ message: "Username already exists!" });
      }
      if (error.keyPattern.email) {
        return res.status(400).send({ message: "Email already exists!" });
      }
    }
    
    res.status(500).send({ 
      message: "Error during signup. Please try again later." 
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid password!" });
    }

    if (user.twoFactorEnabled) {
      if (!req.body.token) {
        return res.status(200).send({
          twoFactorRequired: true,
          message: "2FA token required"
        });
      }

      const verified = speakeasy.totp.verify({
        secret: user.twoFactorSecret,
        encoding: 'base32',
        token: req.body.token
      });

      if (!verified) {
        return res.status(401).send({ message: "Invalid 2FA token!" });
      }
    }

    const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: "24h" });

    res.status(200).send({
      _id: user._id,
      username: user.username,
      email: user.email,
      accessToken: token,
      twoFactorEnabled: user.twoFactorEnabled
    });
  } catch (error) {
    console.error("Signin Error:", error);
    res.status(500).send({ message: "Error during signin", error });
  }
};

exports.setup2FA = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }

    const secret = speakeasy.generateSecret({ 
      length: 20,
      name: user.username,
      issuer: 'Dulcinella'
    });
    
    user.twoFactorSecret = secret.base32;
    await user.save();

    const otpauthUrl = speakeasy.otpauthURL({
      secret: secret.base32,
      label: user.username,
      issuer: 'Dulcinella',
      encoding: 'base32'
    });

    const qrCode = await QRCode.toDataURL(otpauthUrl);

    res.status(200).send({
      username: user.username,
      qrCode: qrCode,
      secret: secret.base32 
    });
  } catch (error) {
    console.error("2FA Setup Error:", error);
    res.status(500).send({ message: "Error during 2FA setup", error });
  }
};

exports.verify2FA = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }

    console.log('Verifying 2FA token:', {
      secret: user.twoFactorSecret,
      token: req.body.token,
      encoding: 'base32',
      window: 2 
    });

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: req.body.token,
      window: 2 
    });

    console.log('Verification result:', verified);

    if (!verified) {
      return res.status(401).send({ message: "Invalid token!" });
    }

    user.twoFactorEnabled = true;
    await user.save();

    const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: "24h" });

    res.status(200).send({
      _id: user._id,
      username: user.username,
      email: user.email,
      accessToken: token,
      twoFactorEnabled: true
    });
  } catch (error) {
    console.error("2FA Verification Error:", error);
    res.status(500).send({ message: "Error during 2FA verification", error });
  }
};

exports.disable2FA = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: req.body.token
    });

    if (!verified) {
      return res.status(401).send({ message: "Invalid token!" });
    }

    user.twoFactorEnabled = false;
    user.twoFactorSecret = null;
    await user.save();

    res.status(200).send({
      message: "2FA disabled successfully",
      twoFactorEnabled: false
    });
  } catch (error) {
    console.error("2FA Disable Error:", error);
    res.status(500).send({ message: "Error during 2FA disabling", error });
  }
};
