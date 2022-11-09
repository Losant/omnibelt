const { pipe, map, apply, adjust } = require('@pnpm/ramda');

const { testHarnessUnary } = require('../../test/utils');
const dotPath = require('./dot-path');

const testObj = {
  foo: 'bar',
  a: {
    b: 1,
    c: [1, 2, 3]
  }
};

const testArr = [1, 2, 3];

const cases = [
  ['foo', testObj, 'bar'],
  ['a.b', testObj, 1],
  ['a.c', testObj, [1, 2, 3]],
  ['a.c.0', testObj, 1],
  ['not.valid', testObj, undefined],
  ['nullObj', null, undefined],
  ['0', testArr, 1],
  ['0.0', [testArr], 1]
];

const testHarnessAdapter = pipe(
  adjust(0, dotPath),
  apply(testHarnessUnary)
);

map(testHarnessAdapter)(cases);
