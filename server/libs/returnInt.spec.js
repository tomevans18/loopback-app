const { expect } = require('chai');

const returnInt = require('./returnInt');

describe('libs/returnInt.js', () => {
  [
    [98, 98],
    [123, 123],
    ['98', 98],
    ['123', 123],
    ['1,500', 1500],
    ['1,234,567', 1234567],
    ['abs123', 'NaN'],
    ['a1b2b3', 'NaN']
  ].forEach((testValues) =>
    it(`should return ${testValues[1]} from ${typeof testValues[0] === 'string' ? `"${testValues[0]}"` : testValues[0]}`, () =>
      testValues[1] === 'NaN'
        ? expect(returnInt(testValues[0])).to.be.NaN
        : expect(returnInt(testValues[0])).to.equal(testValues[1])
    )
  );
});
