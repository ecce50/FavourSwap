const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    trim: true,
  },
  address: {
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    postcode: { type: String },
  },
  userImage: {
    type: String,
  },
  language: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  pointsBalance: {
    type: Number,
    default: 0,
  },
  creditCardRef: {
    type: String,
  },
  servicesOffered: [String],
  currentFavours: [String],
  pastFavours: [String],
  currentErrands: [String],
  pastErrands: [String],
});

const User = model("User", userSchema);

module.exports = User;
