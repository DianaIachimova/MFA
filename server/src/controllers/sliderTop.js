const sliderTopData = require("../models/sliderTop.schema");

exports.create = async (req, res) => {
  const { imgUrl } = req.body;

  const record = await sliderTopData.create({
    imgUrl,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await sliderTopData.find();

  res.send(records);
};
