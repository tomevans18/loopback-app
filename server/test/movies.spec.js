const supertest = require('supertest');
const returnInt = require('../libs/returnInt');
const server = require('../server');
const { expect } = require('chai');
const expectedResponse = require('../__mocks__/movies.json');

describe('GET /api/movies', () => {
  it('should return the correct response if downstream system returns response', (done) => {
    supertest(server)
      .get('/api/movies')
      .expect(200)
      .end((error, response) => {
        expect(error).to.equal(null);

        expect(returnInt(response.headers.apicallcount) > 0).to.equal(true);
        expect(response.body).to.deep.equal(expectedResponse);

        return done();
      });
  });
});
