const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  imgUrl: String,
  redirectUrl: String,
  width: String,
  height: String,
  alt: String,
});

const Partner = mongoose.model("Partner", schema);

module.exports = Partner;
