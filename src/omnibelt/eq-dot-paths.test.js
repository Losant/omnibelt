const { map } = require('@pnpm/ramda');

const { testHarnessUnary } = require('../../test/utils');
const eqDotPaths = require('./eq-dot-paths');

const cases = [
  ['foo', { foo: 1 }, { foo: 1 }, true],
  ['foo', { foo: 1 }, { foo: 2 }, false],
  ['a.b', { a: { b: 1 } }, { a: { b: 1 } }, true],
  ['a.b', { a: { b: 1 } }, { a: { b: 2 } }, false],
  ['a', { a: [1, 2, 3] }, { a: [1, 2, 3] }, true],
  ['a', { a: { b: [1, 2, 3] } }, { a: { b: [1, 2, 3] } }, true],
  ['a.b.c', { a: 'foo' }, { a: 'foo' }, true]
];

const testHarnessAdapter = (testCase) => {
  const [stringPath, objA, objB, expectedResult] = testCase;

  return testHarnessUnary(eqDotPaths(stringPath, objA), objB, expectedResult);
};

map(testHarnessAdapter)(cases);
