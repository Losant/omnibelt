const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const isPopulatedString = require('./is-populated-string');

const cases = [
  ['foo', true],
  ['   ', true],
  ['', false],
  [5, false],
  [false, false],
  [{ foo: 'foo' }, false],
  [[ 'foo' ], false],
];

map(
  apply(testHarness(isPopulatedString))
)(cases);
