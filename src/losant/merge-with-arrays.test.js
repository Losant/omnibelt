const testCases = require('../../test/test-cases');

const mergeWithArrays = require('./merge-with-arrays');

testCases(mergeWithArrays, [
  [
    [
      { foo: [1, 2, 3], a: 3 },
      { foo: [4], a: 4 },
    ],
    { foo: [1, 2, 3, 4], a: 4 },
  ],
  [
    [
      { foo: [1, 2, 3], bar: { a: 'a', c: 1 } },
      { foo: [4], bar: { a: 'new', b: 'b' } },
    ],
    { foo: [1, 2, 3, 4], bar: { a: 'new', b: 'b', c: 1 } },
  ],
]);
