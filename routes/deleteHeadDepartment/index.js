const express = require("express");
const deleteHeadDepartment = express.Router();
var nodemailer = require("nodemailer");
require("dotenv").config();
const db = require("../../models/userSchema").User;
deleteHeadDepartment.post("/", async (req, res) => {
  const email = req.body.email;
  const output = `<div><p>Sir Mr :<h5>${req.body.name}</h5></p>
  Sorry to inform you but we no longer need your services
  <P>Reasons : ${req.body.message}</P>
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
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log("message failed");
    } else {
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
  });

  await db.findOne({ email }, async (err, docs) => {
    if (docs.role === req.body.role) {
      await db.deleteOne(docs);
    } else {
      console.log("removing user failed!!");
      res.send("removing user failed!!");
    }
  });
});

module.exports = deleteHeadDepartment;
