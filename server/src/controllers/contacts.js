const Contact = require("../models/contact.schema");

exports.create = async (req, res) => {
  const { city, number } = req.body;

  const record = await Contact.create({
    city,
    number,
  });

  res.send(record);
};

exports.find = async (req, res) => {
  const records = await Contact.find();

  res.send(records);
};
