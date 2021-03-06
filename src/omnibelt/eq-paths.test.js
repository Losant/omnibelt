const { map } = require('ramda');

const { testHarnessUnary } = require('../../test/utils');
const eqPaths = require('./eq-paths');

const allCases = [
  {
    label: 'a.b === 1',
    cases: [
      [
        ['a', 'b'],
        { a: { b: 1 } },
        { a: { b: 1 } },
        true
      ],
      [
        ['a', 'b'],
        { a: { b: 1 } },
        { a: { b: 2 } },
        false
      ]
    ]
  }
];

const testHarnessAdapter = ({ label, cases }) => {
  const runTestCase = (testCase) => {
    const [pathToCheck, obj1, obj2, expected] = testCase;

    const func = eqPaths(pathToCheck, obj1);
    const subject = obj2;

    return testHarnessUnary(func, subject, expected);
  };

  describe(label, () => {
    map(runTestCase, cases);
  });
};

map(testHarnessAdapter)(allCases);
