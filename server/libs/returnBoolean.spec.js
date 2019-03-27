const { expect } = require('chai');

const returnBoolean = require('./returnBoolean');

describe('libs/returnBoolean.js', () => {
  [
    ['TRUE', true],
    ['true', true],
    [true, true],
    ['1', true],
    [1, true],
    [undefined, false],
    [null, false],
    ['foo', false],
    ['', false],
    [0, false]
  ].forEach((testValues) =>
    it(`should return ${testValues[1]} from ${typeof testValues[0] === 'string' ? `"${testValues[0]}"` : testValues[0]}`, () =>
      expect(returnBoolean(testValues[0])).to.equal(testValues[1])
    )
  );
});
