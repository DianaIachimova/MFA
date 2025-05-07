const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  imgUrl: String,
});

const sliderBottomData = mongoose.model("sliderBottomData", schema);

module.exports = sliderBottomData;
