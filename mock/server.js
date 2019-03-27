const express = require('express');
const morgan = require('morgan');
const mocks = require('./stubs');

mocks.forEach(({ port, stubs }) => {
  const app = express();
  app.use(morgan('dev'));

  stubs.forEach(({ method, path, response: { statusCode, headers, body } }) => {
    app[method.toLowerCase()](path, function (req, res) {
      res.set(headers);
      res.status(statusCode);
      res.send(body);
    });
  });

  app.listen(port, () => console.log(`listening on port ${port}`));
});
