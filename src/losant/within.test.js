const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const within = require('./within');

const withinRange = within(5, 15);

const cases = [
  [10, true],
  [14.5, true],
  [5, false],
  [15, false],
];

map(
  apply(testHarness(withinRange))
)(cases);
