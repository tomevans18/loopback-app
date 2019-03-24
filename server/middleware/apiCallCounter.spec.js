const sinon = require('sinon');
const { expect } = require('chai');
const apiCallCounter = require('./apiCallCounter');

describe('middleware/apiCallCounter.js', () => {
  it('should set the API call count', async () => {
    const req = {};
    const next = sinon.spy();

    apiCallCounter()(req, {}, next);

    expect(req.apiCallCounter).to.equal(1);
    expect(next.callCount).to.equal(1);

    apiCallCounter()({}, {}, next);
    expect(req.apiCallCounter).to.equal(2);
    expect(next.callCount).to.equal(2);
  });
});
