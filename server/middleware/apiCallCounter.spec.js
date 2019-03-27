const sinon = require('sinon');
const { expect } = require('chai');
const apiCallCounter = require('./apiCallCounter');

describe('middleware/apiCallCounter.js', () => {
  it('should set the API call count', async () => {
    const req = {};
    const res = {};
    const next = sinon.spy();

    apiCallCounter()(req, res, next);

    expect(req.apiCallCount).to.equal(1);
    expect(next.callCount).to.equal(1);
  });
});
