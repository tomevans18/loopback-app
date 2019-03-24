'use strict';

let counter = 0;
module.exports = () => {
  return (req, res, next) => {
    counter++;
    req.apiCallCount = counter;
    next();
  };
};
