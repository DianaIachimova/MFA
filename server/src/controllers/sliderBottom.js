const sliderBottomData = require("../models/sliderBottom.schema");

exports.create = async (req, res) => {
  const { imgUrl } = req.body;

  const record = await sliderBottomData.create({
    imgUrl,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await sliderBottomData.find();

  res.send(records);
};
