const express = require("express");
const router = express.Router();
const Project = require('../../models/projectSchema');
const User = require("../../models/userSchema").User;


router.get('/dashboardProject', (req, res) => {
  Project.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      var arr = [];
      var fin = 0; var acc = 0; var mark = 0; var hr = 0; var meth = 0; var it = 0;
      var sum = result.length
      for (var i = 0; i < result.length; i++) {
        if (result[i].department === "Financial") { fin++ }
        else if (result[i].department === "Accounting") { acc++ }
        else if (result[i].department === "Marketing") { mark++ }
        else if (result[i].department === "Human Ressources") { hr++ }
        else if (result[i].department === "Methods") { meth++ }
        else if (result[i].department === "IT") { it++ }
      }
      arr.push(fin); arr.push(acc); arr.push(mark); arr.push(hr); arr.push(meth); arr.push(it);
      arr.push(sum);
      res.send(arr);
    }
  });
});

router.get('/dashboardUser', (req, res) => {
  User.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      var arr = [];
      var fin = 0; var acc = 0; var mark = 0; var hr = 0; var meth = 0; var it = 0
      var sum = result.length - 1
      for (var i = 0; i < result.length; i++) {
        if (result[i].department === "Financial") { fin++ }
        else if (result[i].department === "Accounting") { acc++ }
        else if (result[i].department === "Marketing") { mark++ }
        else if (result[i].department === "Human Ressources") { hr++ }
        else if (result[i].department === "Methods") { meth++ }
        else if (result[i].department === "IT") { it++ }
      }
      arr.push(fin); arr.push(acc); arr.push(mark); arr.push(hr); arr.push(meth); arr.push(it);
      arr.push(sum);
      res.send(arr);
    }
  });
});

router.get('/projectMonth', (req, res) => {
  Project.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      var arr = [];
      var jan = 0; var feb = 0; var mar = 0; var apr = 0; var mai = 0; var jun = 0;
      var jul = 0; var aug = 0; var sep = 0; var oct = 0; var nov = 0; var dec = 0;
      for (var i = 0; i < result.length; i++) {
        var month = result[i].deadline.slice(5, 7)
        if (month === "01") { jan++ }
        else if (month === "02") { feb++ }
        else if (month === "03") { mar++ }
        else if (month === "04") { apr++ }
        else if (month === "05") { mai++ }
        else if (month === "06") { jun++ }
        else if (month === "07") { jul++ }
        else if (month === "08") { aug++ }
        else if (month === "09") { sep++ }
        else if (month === "10") { oct++ }
        else if (month === "11") { nov++ }
        else if (month === "12") { dec++ }
      }
      arr.push(jan); arr.push(feb); arr.push(mar); arr.push(apr); arr.push(mai); arr.push(jun);
      arr.push(jul); arr.push(aug); arr.push(sep); arr.push(oct); arr.push(nov); arr.push(dec);
      res.send(arr);
    }
  });
});

module.exports = router;

