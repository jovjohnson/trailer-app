'use strict';

var mongoose = require('mongoose');

var Movie = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
});

module.exports = Movie;
