const { expect } = require('chai');
const circuitBreaker = require('./circuit-breaker');

describe('libs/get-circuit-breaker.js', () => {
  it('should return a circuit breaker service', () => {
    const settings = {
      name: 'test123'
    };
    const service = circuitBreaker(settings);

    expect(service.commandKey).to.equal(settings.name);
  });

  it('should return correct value in run function', () => {
    const settings = {
      name: 'test123'
    };
    const service = circuitBreaker(settings);

    let serviceRunResponse;
    const serviceRunExpectedResponse = ['foo'];
    const testFunc = (...value) => { serviceRunResponse = value; };
    service.run({ testFunc }, 'testFunc', serviceRunExpectedResponse);

    expect(serviceRunResponse).to.deep.equal(serviceRunExpectedResponse);
  });

  it('should throw error if no name is passed', () => {
    const settings = {};

    try {
      circuitBreaker(settings);
    } catch (err) {
      expect(err.message).to.contain('Service name must be passed to circuit breaker');
    }
  });
});
