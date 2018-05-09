const { pipe, map, apply, adjust } = require('ramda');

const { testHarnessUnary } = require('../../test/utils');
const ensureStartsWith = require('./ensure-starts-with');

const cases = [
  ['foo', 'foo-bar', 'foo-bar'],
  ['foo', 'bar', 'foobar'],
  [[1], [1, 2, 3], [1, 2, 3]],
  [[1], [2, 3], [1, 2, 3]],
  [[1, 2], [3], [1, 2, 3]]
];

const testHarnessAdapter = pipe(
  adjust(ensureStartsWith, 0),
  apply(testHarnessUnary),
);

map(testHarnessAdapter)(cases);
