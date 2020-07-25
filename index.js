const express = require("express");
const app = express();
// const config = require('config');
// if (!config.get('jwtPrivateKey')) {
//   console.error('FATAL ERROR: jwtPrivateKey is not defined');
//   process.exit(1);
// }
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");

require("dotenv").config();
const cors = require("cors");

// Connection to DB
const uri = process.env.URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

app.use(cors());
// app.use(express.static('uploads'));
// app.use(express.static('build/index.html'));
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
//creating or deleting heads of department Routes
app.use("/CreateNewHeadDepartment", routes.CreateNewHeadDepartment);
app.use("/deleteHeadDepartment", routes.deleteHeadDepartment);
app.use('/deleteEmployee', routes.deleteEmployee)
//project Route
app.use('/project', routes.projectRoutes);
app.use('/project', routes.updateRoutes);
app.use('/project', routes.infoRoutes);
//meeting route
app.use('/meeting', routes.meetingRoutes)
//user Route
app.use('/users', routes.userRoutes);
//auth Route
app.use("/auth", routes.authRoutes);

app.get("*", (req, res) => {
  // res.sendFile(__dirname + '/build/index.html');
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("App is listetning on PORT", PORT);
});

//Session
// app.use(
//   session({
//     name: 'sessionId',
//     secret: 'mysecretkey',
//     saveUninitialized: false, //don't create session for not logged in users
//     resave: false, // don't save session if unmodified
//     // where to store session data
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//       ttl: 60 * 60 * 24 * 1, //1 day
//     }),
//     cookie: {
//       secure: false,
//       httpOnly: false, // if true, will disallow js from reading cookie data
//       expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
//     },
//   })
// );

// Passport Config

// require('./config/passport')(passport);
// //Passport init (must be after establishing the session above)
// app.use(passport.initialize());
// app.use(passport.session);
