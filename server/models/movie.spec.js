const sinon = require('sinon');
const { expect } = require('chai');
const movieModel = require('./movie');
const movieService = require('../services/movie');
const moviesStub = require('../__mocks__/movies.json');

describe('models/movie.js', () => {
  let model;
  let req = {};
  let res = {
    header: sinon.spy(() => {})
  };

  beforeEach(() => {
    model = {};
    movieModel(model);
  });

  it('should add list method to model', () => {
    expect(typeof model.list).to.equal('function');
  });

  it('should return the correct movies', async () => {
    sinon.stub(movieService, 'list')
      .callsFake(() => Promise.resolve(moviesStub));

    const output = await model.list(req, res);

    expect(output).to.deep.equal(moviesStub);

    movieService.list.restore();
  });

  it('should throw error if service fails', async () => {
    const errMsg = 'An error occurred';

    sinon.stub(movieService, 'list')
      .callsFake(() => Promise.reject(new Error(errMsg)));

    try {
      await model.list(req, res);
    } catch (err) {
      expect(err.message).to.contain(errMsg);
    }

    movieService.list.restore();
  });
});
