'use strict';

const boot = require('loopback-boot');
const app = require('./app');

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, (err) => {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) { app.start(); }
});

module.exports = app;
