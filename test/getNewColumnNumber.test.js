const assert = require('assert');
const getNewColumnNumber = require('../src/getNewColumnNumber');

suite('New Column Number', () => {
  test('Should return 1 when current column is 2', () => {
    assert.equal(1, getNewColumnNumber(2))
  });

  test('Should return 2 when current column in 1', () => {
    assert.equal(2, getNewColumnNumber(1));
  });
});