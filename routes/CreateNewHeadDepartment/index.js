const express = require("express");
const router = express.Router();
const CreateNewHeadDepartment = router;
const db = require("C:/Users/boula/Desktop/thesis_Project_ManageIT/models/userSchema.js");
CreateNewHeadDepartment.post("/", (req, res) => {
  console.log(req.body);
  db.create(req.body);
});
module.exports = CreateNewHeadDepartment;
