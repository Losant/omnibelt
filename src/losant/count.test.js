const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const count = require('./count');

const cases = [
  [[1, 1, 2], { '1': 2, '2': 1 }],
  [['a', 'b', 'a'], { 'a': 2, 'b': 1 }],
  // NOTE: This is just to show not to do this
  [[{ a: 'a' }, { b: 'b' }, { a: 'a' }], { '[object Object]': 3 }],
];

map(
  apply(testHarness(count))
)(cases);
