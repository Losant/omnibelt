const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const isNotNil = require('./is-not-nil');

const cases = [
  [null, false],
  [undefined, false],
  [0, true],
  [true, true],
  [false, true],
  ['', true],
  ['foo', true],
];

map(
  apply(testHarness(isNotNil))
)(cases);
