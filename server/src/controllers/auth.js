const config = require("../configs/auth.config");
const User = require("../models/user.schema");
const {sendMail} = require("../utils/sendEmail");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

exports.signup = async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    otp: null,
    otp_verified: false,
  });

  await user.save();

  res.send({ message: "User was registered successfully!" });
};

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ accessToken: null, message: "Invalid Password!" });
    }

    const code = generateVerificationCode();
    user.otp = code;
    user.otp_verified = false; 
    await user.save();

    sendMail(user.email, code);

    const payload = { id: user.id, username: user.username, otp_verified: user.otp_verified };
    const token = jwt.sign(payload, config.secret, { expiresIn: "24h" });

    res.status(200).send({
      accessToken: token,
      message: "OTP sent to email!",
    });
  } catch (error) {
    res.status(500).send({ message: "Error during signin", error });
  }
};

exports.codeverify = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }

    const { otp } = req.body;

    console.log("User OTP:", user.otp, "Provided OTP:", otp);

    if (String(user.otp) === String(otp)) {
      user.otp_verified = true;
      await user.save();

      const payload = {
        id: user._id,
        username: user.username,
        otp_verified: true, 
      };

      const token = jwt.sign(payload, config.secret, { expiresIn: "24h" });

      return res.status(200).send({
        _id: user._id,
        email: user.email,
        username: user.username,
        accessToken: token,
        message: "OTP verified successfully!",
      });
    } else {
      return res.status(403).send({ message: "Incorrect OTP!" });
    }
  } catch (error) {
    console.error("OTP Verification Error:", error);
    res.status(500).send({ message: "Error during OTP verification", error });
  }
};
