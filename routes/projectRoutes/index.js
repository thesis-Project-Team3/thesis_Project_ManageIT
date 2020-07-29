const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const Project = require('../../models/projectSchema');
const admin = require('../../middleware/admin');

router.post('/create', (req, res) => {
  var project = new Project(req.body);
  project.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
    res.end();
  });
});

router.get('/create', (req, res) => {
  Project.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// router.post('/create/:id', (req, res) => {
//   collections.Student.find({ _id: req.params.id }, function (
//     err,
//     result
//   ) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
//   // console.log(req.params.id);
// });

router.put('/create/:id', (req, res) => {
  console.log(req.body);
});
module.exports = router;
