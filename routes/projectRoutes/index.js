const express = require('express');
const router = express.Router();
const Project = require('../../models/projectSchema');

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

module.exports = router;
