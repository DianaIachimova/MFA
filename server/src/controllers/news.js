const newsData = require("../models/news.schema");

exports.create = async (req, res) => {
  const { data, title, detail, imgUrl } = req.body;

  const record = await newsData.create({
    data,
    title,
    detail,
    imgUrl,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await newsData.find();

  res.send(records);
};

exports.getNews = async (req, res) => {
  const key = req.params.key;

  const newsOpen = await newsData.findOne({ key });

  if (newsOpen) {
    res.send(newsOpen);
  } else {
    res.status(404).send("newsOpen not found");
  }
};
