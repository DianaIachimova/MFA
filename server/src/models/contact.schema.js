const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  city: String,
  number: String,
});

const Contact = mongoose.model("Contact", schema);

module.exports = Contact;
