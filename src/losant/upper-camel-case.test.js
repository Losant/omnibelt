const { map, apply } = require('ramda');
const testHarness = require('./test-harness');
const upperCamelCase = require('./upper-camel-case');

const cases = [
  ['foo', 'Foo'],
  ['foo-bar-baz', 'FooBarBaz'],
  ['foo_bar_baz', 'FooBarBaz'],
  ['foo bar baz', 'FooBarBaz'],
];

map(
  apply(testHarness(upperCamelCase))
)(cases);
