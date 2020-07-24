const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const config = require('config');
const PORT = process.env.PORT || 5000;
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

// if (!config.get('jwtPrivateKey')) {
//   console.error('FATAL ERROR: jwtPrivateKey is not defined');
//   process.exit(1);
// }

require('dotenv').config();
const cors = require('cors');

// Connection to DB
const uri = process.env.URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});

app.use(cors());
// app.use(express.static('uploads'));
// app.use(express.static('build/index.html'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

//project Route
app.use('/project', routes.projectRoutes);

//user Route
app.use('/users', routes.userRoutes);

// auth Route
app.use('/auth', routes.authRoutes);

app.get('*', (req, res) => {
  // res.sendFile(__dirname + '/build/index.html');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('App is listetning on PORT', PORT);
});
