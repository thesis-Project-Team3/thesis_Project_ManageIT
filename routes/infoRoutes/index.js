const express = require('express');
const router = express.Router();
const Project = require('../../models/projectSchema');
var idx;
router.post('/index', (req, res) => {
  if (req.body.index || req.body.index === 0) {
    idx = req.body.index
  }
  Project.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send([result[idx]]);
    }
  });
});

router.post('/decline', (req, res) => {
  Project.updateOne(
    { title: req.body.title },
    { $set: { status: req.body.status, progress: req.body.progress } },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  )
});

module.exports = router;