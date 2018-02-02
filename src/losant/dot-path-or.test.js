const { map, pathOr } = require('ramda');

const testHarness = require('./test-harness');
const dotPathOr = require('./dot-path-or');

const testObj = {
  foo: 'bar',
  a: {
    b: 1,
    c: [1, 2, 3],
  },
};

const testArr = [1, 2, 3];

const cases = [
  ['N/A', 'foo', testObj, 'bar'],
  ['N/A', 'a.b', testObj, 1],
  ['N/A', 'a.c', testObj, [1, 2, 3]],
  ['N/A', 'a.c.0', testObj, 1],
  ['N/A', 'not.valid', testObj, 'N/A'],
  ['N/A', 'nullObj', null, 'N/A'],
  ['N/A', '0', testArr, 1],
  ['N/A', '0.0', [testArr], 1],
];

const testHarnessAdapter = (testCase) => {
  const [defaultValue, stringPath, obj, expectedResult] = testCase;

  return testHarness(dotPathOr(defaultValue, stringPath), obj, expectedResult);
};

map(testHarnessAdapter)(cases);
