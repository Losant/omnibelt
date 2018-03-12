const { map, apply } = require('ramda');

const testHarnessUnary = require('./test-harness-unary');
const isNotEmpty = require('./is-not-empty');

const cases = [
  ['', false],
  ['foo', true]
];

map(
  apply(testHarnessUnary(isNotEmpty))
)(cases);
