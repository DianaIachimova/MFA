const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  parent: String,
  title: String,
  href: String,
});

const SubNavData = mongoose.model("SubNavData", schema);

module.exports = SubNavData;
