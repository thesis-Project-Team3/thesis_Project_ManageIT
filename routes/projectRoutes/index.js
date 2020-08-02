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

// Router for creating projects
router.get('/create', (req, res) => {
  Project.find({}, function (err, result) {
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

// Router for filtering method projects
router.get('/methods', (req, res) => {
  Project.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      var arr1 = []
      var arr2 = []
      var arr3 = []
      var arr4 = []
      for (var i = 0; i < result.length; i++) {
        if (result[i].department === "Methods") {
          arr1.push(result[i])
        }
        else if (result[i].progress === "Sent to Method Department") {
          arr2.push(result[i])
        }
        else if (result[i].progress === "Sent back to Method Department") {
          arr3.push(result[i])
        }
      }
      arr4.push(arr1)
      arr4.push(arr2)
      arr4.push(arr3)
      res.send(arr4);
    }
  });
});

// Router for filtering IT projects
router.get('/it', (req, res) => {
  Project.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      var arr1 = []
      var arr2 = []
      var arr4 = []
      for (var i = 0; i < result.length; i++) {
        if (result[i].department === "IT") {
          arr1.push(result[i])
        }
        else if (result[i].progress === "Sent to IT Department") {
          arr2.push(result[i])
        }
      }
      arr4.push(arr1)
      arr4.push(arr2)
      res.send(arr4);
    }
  });
});

module.exports = router;
