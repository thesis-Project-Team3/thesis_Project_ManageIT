const express = require('express');
const router = express.Router();
const Project = require('../../models/projectSchema.js')



router.post("/update", async (req, res) => {  
    try {   
        console.log
    let post = await Project.create(req.body);  
      res.send(post);  } 
      catch (error) {   
           res.send(error);  }});

module.exports = router;
