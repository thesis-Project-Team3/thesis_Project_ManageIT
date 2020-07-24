const express = require("express");
const router = express.Router();
const CreateNewHeadDepartment = router;
var nodemailer = require("nodemailer");
require("dotenv").config();
const db = require("../../models/userSchema.js");
CreateNewHeadDepartment.post("/", async (req, res) => {
  const email = req.body.email;
  var check;
  await db.findOne({ email }, (err, docs) => {
    if (docs) {
      check = "exist";
      console.log("already exists");
    }
    if (!docs) {
      check = "nonRegistred";
      console.log("new user");
    }
    return;
  });
  const output = `<div><p>Sir Mr :<h5>${
    req.body.firstName + " " + req.body.lastName
  }</h5></p>
we are happy to tell you that we are proud to have you in the company with us.
  <P>Your password is : ${req.body.Password}</P>
  </div>
  `;
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CEO_EMAIL,
      pass: process.env.CEO_EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let options = {
    from: `"ManageIT CEO :)"`,
    to: req.body.email,
    subject: "Inform ✔",
    html: output,
  };
  if (check === "nonRegistred") {
    await transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log("message failed");
      } else {
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      }
    });
  }
  // console.log(req.body);
  if (check === "nonRegistred") {
    await db.create(req.body);
  } else {
    res.send("the user already exists");
  }
});
module.exports = CreateNewHeadDepartment;
