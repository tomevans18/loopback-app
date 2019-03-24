'use strict';

const returnInt = require('./returnInt');
const returnBoolean = require('./returnBoolean');
const hystrix = require('hystrixjs');
const hystrixConfig = hystrix.hystrixConfig;
const commandFactory = hystrix.commandFactory;

const DEFAULTS = {
  'timeout': 10000,
  'disable': false,
  'openTimeoutInMilliseconds': 60000,
  'errorThresholdPercentage': 5,
  'minimumRequestForHealthCheck': 5,
  'executionTrackWindow': 10000,
  'windowBucket': 10,
};

module.exports = (config) => {
  const settings = Object.assign({}, DEFAULTS, config);

  if (typeof settings.name === 'undefined')
    throw new Error('Service name must be passed to circuit breaker');

  hystrixConfig.init({
    'hystrix.circuit.volumeThreshold.forceOverride': false,
    'hystrix.circuit.volumeThreshold.override': settings.minimumRequestForHealthCheck,
    'hystrix.promise.implementation': Promise,
  });

  console.log('circuit breaker', settings);

  return commandFactory.getOrCreate(settings.name)
    .timeout(returnInt(settings.timeout))
    .circuitBreakerForceClosed(returnBoolean(settings.disable))
    .circuitBreakerSleepWindowInMilliseconds(returnInt(settings.openTimeoutInMilliseconds))
    .circuitBreakerErrorThresholdPercentage(returnInt(settings.errorThresholdPercentage))
    .circuitBreakerRequestVolumeThreshold(returnInt(settings.minimumRequestForHealthCheck))
    .statisticalWindowLength(returnInt(settings.executionTrackWindow))
    .statisticalWindowNumberOfBuckets(returnInt(settings.windowBucket))
    .run((obj, operation, params) => obj[operation](...params))
    .build();
};
