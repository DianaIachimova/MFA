const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  parent: String,
  title: String,
});

const SubFooterData = mongoose.model("SubFooterData", schema);

module.exports = SubFooterData;
