const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featuresSchema = new Schema({
  title: { type: String },
  description: { type: String },
  deadline: { type: String },
  status: { type: String },
  progress: { type: String },
});

const Features = mongoose.model('features', featuresSchema);

// Fun to Create a project
// async function createProject(department, title, description, status, user) {
//   const project = new Project({
//     department,
//     title,
//     description,
//     status,
//     user,
//   });
//   const result = await project.save();
//   console.log(result);
// }
// createProject(
//   'financial',
//   'new test',
//   'new description',
//   'in progress',
//   '5f18b78d794709194c24f790'
// );

module.exports = Features;
