const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  department: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },

  deadline: {
    type: String,
  },
  creationDate: {
    type: Date,
  },
  status: {
    type: String,
  },
  progress: {
    type: String,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Project = mongoose.model('project', projectSchema);

// Fun to Create a project
async function createProject(department, title, description, status, user) {
  const project = new Project({
    department,
    title,
    description,
    status,
    user,
  });
  const result = await project.save();
  console.log(result);
}
// createProject(
//   'financial',
//   'new test',
//   'new description',
//   'in progress',
//   '5f18b78d794709194c24f790'
// );

module.exports = Project;
