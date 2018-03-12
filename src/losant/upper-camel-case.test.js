const { map, apply } = require('ramda');
const testHarnessUnary = require('./test-harness-unary');
const upperCamelCase = require('./upper-camel-case');

const cases = [
  ['foo', 'Foo'],
  ['foo-bar-baz', 'FooBarBaz'],
  ['foo_bar_baz', 'FooBarBaz'],
  ['foo bar baz', 'FooBarBaz']
];

map(
  apply(testHarnessUnary(upperCamelCase))
)(cases);
