const { noop } = require('lodash/fp');
const testCases = require('../../test/test-cases');
const stringify = require('./stringify');

testCases(stringify, [
  [[''], '\'\''],
  [[null], 'null'],
  [[undefined], 'undefined'],
  [['foo'], '\'foo\''],
  [[1], '1'],
  [[[1, 2, 3]], '[1, 2, 3]'],
  [[{ foo: 'bar' }], '{foo: \'bar\'}'],
  [[Symbol('foo')], 'Symbol(foo)'],
  [[noop], '<fn>'],
  [[[[noop], 5, null]], '[[<fn>], 5, null]']
]);
