const { pipe, map, apply, adjust } = require('ramda');

const testHarness = require('./test-harness');
const mergeDeepWithArrays = require('./merge-deep-with-arrays');

const cases = [
  [
    {
      foo: [1, 2, 3],
      bar: {
        a: 'a',
        c: 1,
      },
      a: 3,
    },
    {
      foo: [4],
      bar: {
        a: 'new',
        b: 'b',
      },
      a: 4,
    },
    {
      foo: [1, 2, 3, 4],
      bar: {
        a: 'new',
        b: 'b',
        c: 1,
      },
      a: 4,
    },
  ],
];

const testHarnessAdapter = pipe(
  adjust(mergeDeepWithArrays, 0),
  apply(testHarness),
);

map(testHarnessAdapter)(cases);
