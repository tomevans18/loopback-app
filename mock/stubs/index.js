const movies = require('./movies');

module.exports = [
  {
    port: 1080,
    stubs: [
      ...movies
    ]
  }
];
