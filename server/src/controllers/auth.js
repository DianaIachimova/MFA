const config = require("../configs/auth.config");
const User = require("../models/user.schema");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  await user.save();

  res.send({ message: "User was registered successfully!" });
};

exports.signin = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });

      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res
        .status(401)
        .send({ accessToken: null, message: "Invalid Password!" });
    }

    const payload = { id: user.id, username: user.username };

    const token = jwt.sign(payload, config.secret, {
      expiresIn: 24 * 60 * 60 * 1000,
    });

    res.status(200).send({
      _id: user._id,
      email: user.email,
      username: user.username,
      accessToken: token,
    });
  });
};
