module.exports = {
  projectRoutes: require('./projectRoutes'),
  updateRoutes: require('./updateRoutes'),
  userRoutes: require('./userRoutes/index'),
  authRoutes: require('./authRoutes'),
  CreateNewHeadDepartment: require("./CreateNewHeadDepartment"),
  deleteHeadDepartment: require("./deleteHeadDepartment"),
  deleteEmployee: require("./deleteEmployee/deleteEmployee"),
  getAllTheUsers:require("./userRoutes/getAllTheUsers")
};
