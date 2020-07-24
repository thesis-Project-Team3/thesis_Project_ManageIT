const express = require('express');
const router = express.Router();
const Project = require('../../models/projectSchema');
var idx = null;
router.post('/index', (req, res) => {
    console.log(req.body)
    if (!idx) {
        idx = req.body.index
    }
    Project.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            console.log(result[idx])
            res.send([result[idx]]);
        }
    });
});

// router.get('/create', (req, res) => {
//   Project.find({}, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

module.exports = router;