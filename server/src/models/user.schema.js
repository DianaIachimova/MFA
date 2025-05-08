const mongoose = require("mongoose");
const Role = require("../models/role.schema");

const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: String,
  otp: Number,
  otp_verified: Boolean,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Role,
    },
  ],
});

const User = mongoose.model("User", schema);

module.exports = User;
