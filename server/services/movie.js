'use strict';

const app = require('../app');
const getCircuitBreaker = require('../libs/circuit-breaker');

module.exports = {
  list: () => getCircuitBreaker({
    name: 'movies'
  })
    .execute(app.dataSources.movies, 'listDS', [])
};
