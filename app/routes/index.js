'use strict';

var downloadAPI = require('./download-router');

module.exports = function (app) {
  app.use('/', downloadAPI);
};
