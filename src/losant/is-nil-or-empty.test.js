const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const isNilOrEmpty = require('./is-nil-or-empty');

const cases = [
  ['', true],
  [null, true],
  [undefined, true],
  ['foo', false],
];

map(
  apply(testHarness(isNilOrEmpty))
)(cases);
