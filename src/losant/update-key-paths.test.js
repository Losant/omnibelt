const { map, apply } = require('ramda');

const testHarnessUnary = require('./test-harness-unary');
const updateKeyPaths = require('./update-key-paths');

const updateFooKeyPath = updateKeyPaths({ foo: ['params', 'bar'] });

const cases = [
  [{ foo: 1 }, { params: { bar: 1 } }]
];

map(
  apply(testHarnessUnary(updateFooKeyPath))
)(cases);
