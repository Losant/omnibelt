const { map, apply } = require('ramda');

const testHarnessUnary = require('../../test/test-harness-unary');
const updateKeys = require('./update-keys');

const updateFooKey = updateKeys({ foo: 'bar' });

const cases = [
  [{ foo: 1 }, { bar: 1 }],
];

map(
  apply(testHarnessUnary(updateFooKey))
)(cases);
