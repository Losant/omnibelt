const { map } = require('ramda');

const testHarness = require('./test-harness');
const pickValues = require('./pick-values');

const cases = [
  {
    keys: ['a', 'b'],
    value: { a: 1, b: 2 },
    expected: [1, 2],
  },
  {
    keys: ['a', 'b'],
    value: { foo: 1, bar: 2 },
    expected: [],
  },
];

map((testCase) => {
  const { keys, value, expected } = testCase;

  return testHarness(pickValues(keys), value, expected);
})(cases);
