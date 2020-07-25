const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  subject: {
    type: String,
  },
  employees: {
    type: String,
  },

  date: {
    type: Date,
  },
});

const Meeting = mongoose.model('meeting', meetingSchema);

module.exports = Meeting;
