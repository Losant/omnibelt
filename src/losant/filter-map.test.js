const { map } = require('ramda');

const testHarness = require('./test-harness');
const filterMap = require('./filter-map');

const cases = [
  {
    label: 'filterMap - filter even, then add 1',
    cases: [
      [
        (a) => { return a % 2 === 0; },
        (a) => { return a + 1; },
        [0, 1, 2, 3, 4],
        [1, 3, 5]
      ]
    ],
  },
];

const testHarnessAdapter = ({ label, cases }) => {
  const runTestCase = (testCase) => {
    const [predicate, transform, input, expected] = testCase;

    const func = filterMap(predicate, transform);

    return testHarness(func, input, expected);
  };

  describe(label, () => {
    return map(runTestCase, cases);
  });
};

map(testHarnessAdapter)(cases);
