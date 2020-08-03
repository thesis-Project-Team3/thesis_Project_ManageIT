const { User } = require("../../models/userSchema");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const arr = [];
  if (req.body.role === "Head") {
    await User.find({ department: req.body.department }, (err, data) => {
      if (err) {
        res.send("nothing");
      } else {
        for (let i = 0; i < data.length; i++) {
          arr.push({ fullname: data[i].fullname });
        }
        res.send(arr);
      }
    });
  } else if (req.body.role === "CEO") {
    await User.find({ role: req.body.role }, (err, data) => {
      if (err) {
        res.send("nothing");
      } else {
        res.send(data);
      }
    });
  }
});
module.exports = router;
