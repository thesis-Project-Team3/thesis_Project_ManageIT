const mongoose = require('mongoose');
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
  },
  position: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  phoneNumber: {
    type: Number,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
