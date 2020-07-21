const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  Reference: {
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
    type: Date,
  },
  progress: {
    type: String,
  },
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
