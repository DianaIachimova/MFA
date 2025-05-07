const User = require("../models/user.schema");

exports.allAccess = async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).send(users);
};

exports.userBoard = async (req, res) => {
  const user = await User.findById(req.userId);

  res.status(200).send(user);
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
