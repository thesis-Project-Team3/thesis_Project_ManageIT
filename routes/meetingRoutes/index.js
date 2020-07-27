const express = require('express');
const router = express.Router();
const Meeting = require('../../models/meetingSchema.js');


router.post('/create', (req, res) => {
    const data = req.body
    console.log(data)
    var model = new Meeting(req.body)
    model.save(function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
        res.end();
    });
});
router.get('/create', (req, res) => {
    Meeting.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});



module.exports = router