const { pipe, map, apply, adjust } = require('ramda');

const testHarness = require('./test-harness');
const containsAny = require('./contains-any');

const cases = [
  [[1, 2], [1, 2, 3], true],
  [['foo'], ['foo', 'bar'], true],
  [[null], [null, 'foo'], true],
  [[1], ['foo'], false],
  [[], ['foo'], false],
  [['foo'], [], false],
];

const testHarnessAdapter = pipe(
  // replace first argument with partially-applied function
  adjust(containsAny, 0),
  apply(testHarness),
);

map(testHarnessAdapter)(cases);
