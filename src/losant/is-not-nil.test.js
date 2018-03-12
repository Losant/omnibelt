const { map, apply } = require('ramda');

const testHarnessUnary = require('../../test/test-harness-unary');
const isNotNil = require('./is-not-nil');

const cases = [
  [null, false],
  [undefined, false],
  [0, true],
  [true, true],
  [false, true],
  ['', true],
  ['foo', true]
];

map(
  apply(testHarnessUnary(isNotNil))
)(cases);
