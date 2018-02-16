const testCases = require('../../test/test-cases');

const hasPath = require('./has-path');

testCases(hasPath, [
  [[['a', 'b'], { a: { b: 1 } }], true],
  [[['a', 'b'], { a: { b: undefined } }], true],
  [[['a', 'b'], { a: {} }], false],
  [[['a', 'b'], { a: 2 }], false],
]);
