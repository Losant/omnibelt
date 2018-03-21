const { pipe, map, apply, adjust } = require('ramda');

const { testHarnessUnary } = require('../../test/utils');
const containsAny = require('./contains-any');

const cases = [
  [[1, 2], [1, 2, 3], true],
  [['foo'], ['foo', 'bar'], true],
  [[null], [null, 'foo'], true],
  [[1], ['foo'], false],
  [[], ['foo'], false],
  [['foo'], [], false]
];

const testHarnessAdapter = pipe(
  adjust(containsAny, 0),
  apply(testHarnessUnary),
);

map(testHarnessAdapter)(cases);
