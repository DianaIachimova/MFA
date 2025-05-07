const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  imgUrl: String,
});

const sliderTopData = mongoose.model("sliderTopData", schema);

module.exports = sliderTopData;
