const { map, apply } = require('ramda');

const { testHarnessUnary } = require('../../test/utils');
const isNilOrEmpty = require('./is-nil-or-empty');

const cases = [
  ['', true],
  [null, true],
  [undefined, true],
  ['foo', false]
];

map(
  apply(testHarnessUnary(isNilOrEmpty))
)(cases);
