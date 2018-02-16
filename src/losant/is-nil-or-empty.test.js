const { map, apply } = require('ramda');

const testHarnessUnary = require('../../test/test-harness-unary');
const isNilOrEmpty = require('./is-nil-or-empty');

const cases = [
  ['', true],
  [null, true],
  [undefined, true],
  ['foo', false],
];

map(
  apply(testHarnessUnary(isNilOrEmpty))
)(cases);
