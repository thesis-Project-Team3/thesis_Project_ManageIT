const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  department: {
    type: String,
  },
  fullname: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  creationDate: {
    type: Date,
  },
  deadline: {
    type: String,
  },
  progress: {
    type: String,
  },
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
