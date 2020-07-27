const { User } = require("../../models/userSchema");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  await User.find((err, data) => {
    if (err) res.send("nothing");
    else res.send(data);
  });
});
module.exports = router;
