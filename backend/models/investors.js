const mongoose = require("mongoose");

const investorsSchema = new mongoose.Schema({
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
  isNewbie: {
    type: Boolean,
    required: true,
  },
  amountWillingToRisk: {
    type: String,
    required: true,
  },
  isAwareOfScams: {
    type: Boolean,
    required: true
  },
  hasBeenScammed: {
    type: Boolean,
    required: true,
  }
});
module.exports = mongoose.model("investors", investorsSchema);
