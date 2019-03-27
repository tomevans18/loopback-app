const sinon = require('sinon');
const { expect } = require('chai');
const server = require('../server');
const movieService = require('./movie');
const moviesStub = require('../__mocks__/movies.json');

describe('services/movies.js', () => {
  it('should return the correct movies list', async () => {
    sinon.stub(server.dataSources.movies, 'listAll')
      .callsFake(() => Promise.resolve(moviesStub));

    const movies = await movieService.list();

    expect(movies).to.deep.equal(moviesStub);
  });
});
