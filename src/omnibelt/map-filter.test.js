const { map } = require('ramda');

const { testHarnessUnary } = require('../../test/utils');
const mapFilter = require('./map-filter');

const allCases = [
  {
    label: 'mapFilter - add 1, then filter even',
    cases: [
      [
        (a) => { return a % 2 === 0; },
        (a) => { return a + 1; },
        [0, 1, 2, 3, 4],
        [2, 4]
      ]
    ]
  }
];

const testHarnessAdapter = ({ label, cases }) => {
  const runTestCase = (testCase) => {
    const [predicate, transform, input, expected] = testCase;

    const func = mapFilter(predicate, transform);

    return testHarnessUnary(func, input, expected);
  };

  describe(label, () => {
    map(runTestCase, cases);
  });
};

map(testHarnessAdapter)(allCases);
