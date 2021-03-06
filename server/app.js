'use strict';

const loopback = require('loopback');
const app = loopback();

app.start = () => {
  // start the web server
  return app.listen(() => {
    app.emit('started');

    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);

    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

module.exports = app;
