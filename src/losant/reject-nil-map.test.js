const { map, isNil } = require('ramda');

const testHarnessUnary = require('./test-harness-unary');
const rejectNilMap = require('./reject-nil-map');

const cases = [
  {
    label: 'reject nil map',
    cases: [
      [
        (a) => {
          if (a === 1) { return undefined; }
          if (a === 4) { return null; }
          if (isNil(a)) { return -1; }
          return `a${a}`;
        },
        [null, 1, 2, undefined, 1, 4, 0, '', false],
        [undefined, 'a2', undefined, null, 'a0', 'a', 'afalse']
      ]
    ]
  }
];

const testHarnessAdapter = ({ label, cases }) => {
  const runTestCase = (testCase) => {
    const [transform, input, expected] = testCase;

    const func = rejectNilMap(transform);

    return testHarnessUnary(func, input, expected);
  };

  describe(label, () => {
    return map(runTestCase, cases);
  });
};

map(testHarnessAdapter)(cases);
