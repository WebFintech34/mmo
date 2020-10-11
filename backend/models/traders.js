const mongoose = require("mongoose");

const tradersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  tradingStyle: {
    type: String,
    required: true,
  },
  yearsOfExperience: {
    type: String,
    required: true,
  },
  brokersUsed: {
    type: String,
    required: true,
  },
  isCommittedToEndScams: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("traders", tradersSchema);
