const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const isNotEmpty = require('./is-not-empty');

const cases = [
  ['', false],
  ['foo', true],
];

map(
  apply(testHarness(isNotEmpty))
)(cases);
