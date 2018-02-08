const { map, apply } = require('ramda');

const testHarnessUnary = require('./test-harness-unary');
const clampPositive = require('./clamp-positive');

const cases = [
  [-1, 0],
  [0, 0],
  [20, 20],
  [-Infinity, 0],
  [Infinity, Infinity],
  [NaN, NaN],
  ['1', '1'],
  ['-1', 0],
  ['foo', 'foo'],
];

map(
  apply(testHarnessUnary(clampPositive))
)(cases);
