const { map, apply } = require('ramda');

const testHarnessUnary = require('../../test/test-harness-unary');
const stringify = require('./stringify');

const cases = [
  ['', '\'\''],
  [null, 'null'],
  [undefined, 'undefined'],
  ['foo', '\'foo\''],
  [1, '1'],
  [[1, 2, 3], '[1, 2, 3]'],
  [{ foo: 'bar' }, '{foo: \'bar\'}'],
  [Symbol('foo'), 'Symbol(foo)']
];

map(
  apply(testHarnessUnary(stringify))
)(cases);
