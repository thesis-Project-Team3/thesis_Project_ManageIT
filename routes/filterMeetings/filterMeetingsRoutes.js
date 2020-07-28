const express = require('express');
const router = express.Router();
const Meeting = require('../../models/meetingSchema.js');

router.post('/', (req, res) => {
  console.log(req.body.role);
  // if (req.body.role === "ceo") {
  Meeting.find({}, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(data);
    }
  });
  //   }) else if (req.body.role === "") {
  //     Meeting.find({}, function (err, result) {});
  //   } else if (req.body.role === "") {
  //     Meeting.find({}, function (err, result) {});
  //   } else if (req.body.role === "") {
  //     Meeting.find({}, function (err, result) {});
  //   }
});

module.exports = router;
