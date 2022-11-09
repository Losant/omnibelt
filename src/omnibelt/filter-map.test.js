const { map } = require('@pnpm/ramda');

const { testHarnessUnary } = require('../../test/utils');
const filterMap = require('./filter-map');

const allCases = [
  {
    label: 'filterMap - filter even, then add 1',
    cases: [
      [
        (a) => { return a % 2 === 0; },
        (a) => { return a + 1; },
        [0, 1, 2, 3, 4],
        [1, 3, 5]
      ]
    ]
  }
];

const testHarnessAdapter = ({ label, cases }) => {
  const runTestCase = (testCase) => {
    const [predicate, transform, input, expected] = testCase;

    const func = filterMap(predicate, transform);

    return testHarnessUnary(func, input, expected);
  };

  describe(label, () => {
    map(runTestCase, cases);
  });
};

map(testHarnessAdapter)(allCases);
