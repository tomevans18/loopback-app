const sinon = require('sinon');
const { expect } = require('chai');
const casual = require('casual');
const app = require('../app');
const movieService = require('./movie');

describe('services/movies.js', () => {
  it('should return the correct movies list', async () => {
    const moviesStub = [];
    const numberOfMovies = 10;
    for (let i = 0; i < numberOfMovies; i++) {
      const { title, date, time, uuid, integer, word } = casual;
      moviesStub.push({
        id: uuid,
        title,
        // eslint-disable-next-line
        releaseDate: `${date(format = 'YYYY-MM-DD')}T${time(format = 'HH:mm:ss.SSS')}Z`,
        // eslint-disable-next-line
        rating: integer(from = 0, to = 10),
        genre: word
      });
    }

    sinon.stub(app.dataSources.movies, 'listDS')
      .callsFake(() => Promise.resolve(moviesStub));

    const movies = await movieService.list();

    expect(movies).to.deep.equal(moviesStub);
  });
});
