const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const stringify = require('./stringify');

const cases = [
  ['', '\'\''],
  [null, 'null'],
  [undefined, 'undefined'],
  ['foo', '\'foo\''],
  [1, '1'],
  [[1, 2, 3], '[1, 2, 3]'],
  [{ foo: 'bar' }, '{foo: \'bar\'}'],
  [Symbol('foo'), 'Symbol(foo)'],
];

map(
  apply(testHarness(stringify))
)(cases);
