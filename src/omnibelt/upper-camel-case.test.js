const { map, apply } = require('@pnpm/ramda');
const { testHarnessUnary } = require('../../test/utils');
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
