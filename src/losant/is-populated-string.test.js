const { map, apply } = require('ramda');

const testHarnessUnary = require('../../test/test-harness-unary');
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
  apply(testHarnessUnary(isPopulatedString))
)(cases);
