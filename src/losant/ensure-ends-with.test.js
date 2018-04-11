const { pipe, map, apply, adjust } = require('ramda');

const { testHarnessUnary } = require('../../test/utils');
const ensureEndsWith = require('./ensure-ends-with');

const cases = [
  ['foo', 'bar-foo', 'bar-foo'],
  ['foo', 'bar', 'barfoo'],
  [[1], [3, 2, 1], [3, 2, 1]],
  [[1], [2, 3], [2, 3, 1]],
  [[1, 2], [3], [3, 1, 2]]
];

const testHarnessAdapter = pipe(
  adjust(ensureEndsWith, 0),
  apply(testHarnessUnary),
);

map(testHarnessAdapter)(cases);
