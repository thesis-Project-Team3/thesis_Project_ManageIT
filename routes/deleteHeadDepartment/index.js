const express = require("express");
const deleteHeadDepartment = express.Router();
var nodemailer = require("nodemailer");
const { getMaxListeners } = require("../../models/userSchema");
deleteHeadDepartment.post("/", async (req, res) => {
  const output = `<div><p>Sir Mr :<h5>${req.body.name}</h5></p>
  Sorry to inform you but we no longer need your services
  </div>
  `;
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "boulawdhenadam7@gmail.com",
      pass: "Hustle1234",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let options = {
    from: `"ManageIT CEO :smile:" <boulawdhenadam7@gmail.com>`,
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
});

module.exports = deleteHeadDepartment;
