const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  key: String,
  data: String,
  title: String,
  detail: String,
  imgUrl: String,
});

const newsData = mongoose.model("newsData", schema);

module.exports = newsData;
