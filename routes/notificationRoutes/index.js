const express = require("express");
const router = express.Router();
const Notification = require("../../models/notificationSchema.js");

router.get('/store', (req, res) => {
    Notification.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

module.exports = router;