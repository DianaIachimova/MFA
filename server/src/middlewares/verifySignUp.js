const User = require("../models/user.schema");

exports.checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const { username, email } = req.body;

  const user = await User.findOne({ $or: [{ username }, { email }] });

  if (user) {
    return res.status(400).send({ message: "User already exists!" });
  }

  next();
};
