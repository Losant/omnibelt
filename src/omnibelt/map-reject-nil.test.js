import { map, isNil } from 'ramda';
import { testHarnessUnary } from '../../test/utils';
import mapRejectNil from './map-reject-nil';

const tests = [
  {
    label: 'map reject nil',
    cases: [
      [
        (a) => {
          if (a === 1) { return null; }
          if (a === 4) { return undefined; }
          if (isNil(a)) { return -1; }
          return `a${a}`;
        },
        [null, 1, 2, undefined, 1, 4, 0, '', false],
        [-1, 'a2', -1, 'a0', 'a', 'afalse']
      ]
    ]
  }
];

const testHarnessAdapter = ({ label, cases }) => {
  const runTestCase = (testCase) => {
    const [transform, input, expected] = testCase;

    const func = mapRejectNil(transform);

    return testHarnessUnary(func, input, expected);
  };

  describe(label, () => {
    return map(runTestCase, cases);
  });
};

map(testHarnessAdapter)(tests);
