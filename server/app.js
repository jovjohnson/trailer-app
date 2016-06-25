'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//COORS SUPPORT
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// app.use('/hello', function(req, res, next) {
//   res.send('Hello World!');
//   next();
// });


//connect to mongoDB
mongoose.connect('mongodb://localhost/trailerapp');
mongoose.connection.once('open', function() {

  //load the models
  app.models = require('./models/index');

  console.log('*RAWM saxaphone plays*');
  app.listen(8000);
});
