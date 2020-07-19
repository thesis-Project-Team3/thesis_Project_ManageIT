const mongoose = require('mongoose')



const UserSchema= new mongoose.Schema({
    Title: {
        type: String
    },
    Description:{
        type:String
    },
    Date:{
        type:Date
    } 
})
const Project = mongoose.model("project", UserSchema);

module.exports = Project;