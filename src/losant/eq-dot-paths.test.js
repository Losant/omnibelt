const { map } = require('ramda');

const testHarness = require('./test-harness');
const eqDotPaths = require('./eq-dot-paths');

const cases = [
  ['foo', { foo: 1 }, { foo: 1 }, true],
  ['foo', { foo: 1 }, { foo: 2 }, false],
  ['a.b', { a: { b: 1 } }, { a: { b: 1 } }, true],
  ['a.b', { a: { b: 1 } }, { a: { b: 2 } }, false],
  ['a.b.c', { a: 'foo' }, { a: 'foo' }, true],
];

const testHarnessAdapter = (testCase) => {
  const [stringPath, objA, objB, expectedResult] = testCase;

  return testHarness(eqDotPaths(stringPath, objA), objB, expectedResult);
};

map(testHarnessAdapter)(cases);
