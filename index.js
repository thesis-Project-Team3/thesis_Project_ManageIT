const express = require('express');
const app = express();
// const config = require('config');
// if (!config.get('jwtPrivateKey')) {
//   console.error('FATAL ERROR: jwtPrivateKey is not defined');
//   process.exit(1);
// }
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();
const cors = require('cors');

// Connection to DB
const uri = process.env.URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.set('useFindAndModify', false);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});

app.use(cors());
// app.use(express.static('uploads'));
// app.use(express.static('build/index.html'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

//Images Uploads

// app.use("/images", upload.array("image"), async (req, res) => {
//   const uploader = async (path) => await cloudinary.uploads(path, "Images");
//   if (req.method === "POST") {
//     const urls = [];
//     const files = req.files;
//     for (const file of files) {
//       const { path } = file;
//       const newPath = await uploader(path);
//       urls.push(newPath);
//       fs.unlinkSync(path);
//     }
//     res.send(urls[0].url);
//   } else {
//     res.status(405).json({
//       err: "Images not uploaded successfully",
//     });
//   }
// });

//creating or deleting heads of department Routes
app.use('/CreateNewHeadDepartment', routes.CreateNewHeadDepartment);
app.use('/deleteHeadDepartment', routes.deleteHeadDepartment);
app.use('/deleteEmployee', routes.deleteEmployee);
//project Route
app.use('/project', routes.projectRoutes);
app.use('/project', routes.updateRoutes);
app.use('/project', routes.infoRoutes);
//meeting route
app.use('/meeting', routes.meetingRoutes);
app.use('/filterMeetingsRoutes', routes.filterMeetingsRoutes);
//user Route
app.use('/users', routes.userRoutes);
//auth Route
app.use('/auth', routes.authRoutes);
app.use('/getAllTheUsers', routes.getAllTheUsers);
app.get('*', (req, res) => {
  // res.sendFile(__dirname + '/build/index.html');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('App is listetning on PORT', PORT);
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
