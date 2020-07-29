const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const Project = require('../../models/projectSchema');
const admin = require('../../middleware/admin');

// Router for creating projects
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

// Router for getting projects
router.get('/create', (req, res) => {
  Project.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// Router for getting a specified project (just one project)
router.get('/create/:id', (req, res) => {
  Project.find({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// Router for getting specified projects by employee
router.get('/projectsByEmployee/:userId', (req, res) => {
  Project.find({ user: req.params.userId }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// Router for getting specified projects by department
router.get('/projectsByDepartment/:department', (req, res) => {
  Project.find({ department: req.params.department }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// Router for updating projects
router.patch('/create/:title', (req, res) => {
  Project.findOneAndUpdate(
    { title: req.params.title },
    { feature: req.body },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
