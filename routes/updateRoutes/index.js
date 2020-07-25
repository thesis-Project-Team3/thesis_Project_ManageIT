const express = require('express');
const router = express.Router();
const Project = require('../../models/projectSchema');


router.post('/update', (req, res) => {
  Project.find({title: req.body.title}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
        Project.updateMany(
            {
              title: data[0].title,
              description: data[0].description,
              deadline: data[0].deadline,
            },
            {
              $set: {
                title: req.body.title,
                description: req.body.description,
                deadline: req.body.deadline,
              },
            },
            function (err, result) {
              if (err) {
                res.send(err);
              } else {
                res.send(result);
              }
            }
          );
    }
  });
});

module.exports = router;
