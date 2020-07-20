const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  position: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
