const mongoose = require("mongoose");

const contactformschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = new mongoose.model("Contact", contactformschema);

module.exports = { Contact };
