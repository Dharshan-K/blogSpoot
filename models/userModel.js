/** @format */

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: [true, "please enter the name"],
  },
  password: {
    type: String,
    required: [true, "please enter the password"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please enter the email"],
  },
});

module.exports = mongoose.model("User", userSchema);
