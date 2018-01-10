const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const clampPositive = require('./clamp-positive');

const cases = [
  [-1, 0],
  [0, 0],
  [20, 20],
  [-Infinity, 0],
  [Infinity, Infinity],
  [NaN, NaN],
];

map(
  apply(testHarness(clampPositive))
)(cases);
