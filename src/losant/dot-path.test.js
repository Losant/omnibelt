const { __, map, apply } = require('ramda');

const testHarness = require('./test-harness');
const dotPath = require('./dot-path');

const testObj = {
  foo: 'bar',
  a: {
    b: 1,
    c: [1, 2, 3],
  },
};

const cases = [
  ['foo', 'bar'],
  ['a.b', 1],
  ['a.c', [1, 2, 3]],
  ['not.valid', undefined],
];

map(
  apply(testHarness(dotPath(__, testObj)))
)(cases);
