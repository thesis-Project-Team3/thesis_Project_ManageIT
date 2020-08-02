const express = require("express");
const router = express.Router();
const Meeting = require("../../models/meetingSchema.js");

router.post("/create", (req, res) => {
  const data = req.body;
  //   console.log(data);

  var model = new Meeting(req.body);
  model.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("meeting have been created");
    }
    res.end();
  });
});

module.exports = router;
