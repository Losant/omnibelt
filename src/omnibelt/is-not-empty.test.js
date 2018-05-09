const { map, apply } = require('ramda');

const { testHarnessUnary } = require('../../test/utils');
const isNotEmpty = require('./is-not-empty');

const cases = [
  ['', false],
  ['foo', true]
];

map(
  apply(testHarnessUnary(isNotEmpty))
)(cases);
