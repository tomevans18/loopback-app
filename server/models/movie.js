'use strict';

const movieService = require('../services/movie');

module.exports = (Movie) => {
  Movie.list = async (req, res) => {
    let response;

    try {
      response = await movieService.list();
    } catch (err) {
      throw err;
    }

    res.header('apiCallCount', req.apiCallCount);

    return response;
  };
};
