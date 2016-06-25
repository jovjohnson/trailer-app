'use strict';

var restful = require('node-restful');

//controller setup
module.exports = function(app, route) {
  var rest = restful.model(
    'movie',
    app.models.movie
  ).methods(['get', 'put', 'post', 'delete']);

//register the endpoint
rest.register(app, route);

//return middleware
return function(req, res, next) {
    next();
  };
}
