const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  role: {
    type: String,
  },
  department: {
    type: String,
    default: "member",
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
  isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email, role: this.department },
    'jwtPrivateKey'
  );
  return token;
};

function validateUser(user) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    fullname: Joi.string().required(),
    department: Joi.string().required(),
  };

  return Joi.validate(user, schema);
}
userSchema.methods.isMember = function () {
  return this.role === "member";
};
userSchema.methods.isAuthor = function () {
  return this.role === "author";
};

const User = mongoose.model("user", userSchema);

exports.User = User;
exports.validate = validateUser;
