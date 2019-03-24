const sinon = require('sinon');
const movieModel = require('./movie');
const casual = require('casual');
const movieService = require('../services/movie');
const { expect } = require('chai');

describe('models/user.js', () => {
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
    const movies = [];
    const numberOfMovies = 10;

    for (let i = 0; i < numberOfMovies; i++) {
      const { title, date, time, uuid, integer, word } = casual;
      movies.push({
        id: uuid,
        title,
        // eslint-disable-next-line
        releaseDate: `${date(format = 'YYYY-MM-DD')}T${time(format = 'HH:mm:ss.SSS')}Z`,
        // eslint-disable-next-line
        rating: integer(from = 0, to = 10),
        genre: word
      });
    }

    sinon.stub(movieService, 'list')
      .callsFake(() => Promise.resolve(movies));

    const output = await model.list(req, res);

    expect(output).to.deep.equal(movies);

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
  });
});
