const mongoose = require('mongoose')



const UpdateSchema= new mongoose.Schema({
    Department: {
        type: String
    },

    description:{
        type:String
    },
    date:{
        type:String
    },
    selectValue:{
        type: String
    }
})
const Project = mongoose.model("project", UpdateSchema);

module.exports = Project;