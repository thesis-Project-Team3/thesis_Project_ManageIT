const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const routes = require('./routes');
const bodyParser = require('body-parser');
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
app.use(express.static('uploads'));
app.use(express.static('client/dist'));
app.use(bodyParser.json());

//project Route
app.use('/project', routes.projectRoutes);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/public/index.html');
});

app.listen(PORT, () => {
  console.log('App is listetning on PORT', PORT);
});
