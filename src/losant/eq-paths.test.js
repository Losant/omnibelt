const { map } = require('ramda');

const testHarnessUnary = require('../../test/test-harness-unary');
const eqPaths = require('./eq-paths');

const cases = [
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
    return map(runTestCase, cases);
  });
};

map(testHarnessAdapter)(cases);
