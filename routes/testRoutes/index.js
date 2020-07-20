const express = require('express');
const router = express.Router();
const Project = require('../../models/projectSchema.js')


// router.post('/update',  (req,res)=>{
//     console.log('body:', req.body )

//     const data = req.body
//      const post= new Project(data)

//     post.save()
//        if(error){
// res.status(500).send({msg: 'there is an error'})
//        }else{
//         res.send({msg: "data received"})
//        }
   
//    .then(data => {
//        res.json(data)
       
//    })
//    .catch( err =>{
//        res.json({
//            msg: err
//        })
//    })
// })
router.post("/update", async (req, res) => {  
    try {   
        console.log
    let post = await Project.create(req.body);  
      res.send(post);  } 
      catch (error) {   
           res.send(error);  }});

module.exports = router;
