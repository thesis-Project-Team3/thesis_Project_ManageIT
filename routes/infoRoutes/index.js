const express = require('express');
const router = express.Router();
const Project = require('../../models/projectSchema');
var idx;
router.post('/index', (req, res) => {
    console.log(req.body)
    if (req.body.index || req.body.index === 0) {
        idx = req.body.index
    }
    Project.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send([result[idx]]);
            console.log([result[idx]])
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