const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const updateKeyPaths = require('./update-key-paths');

const updateFooKeyPath = updateKeyPaths({ foo: ['params', 'bar'] });

const cases = [
  [{ foo: 1 }, { params: { bar: 1 } }],
];

map(
  apply(testHarness(updateFooKeyPath))
)(cases);
