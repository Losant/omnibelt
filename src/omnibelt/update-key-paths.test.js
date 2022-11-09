const { map, apply } = require('@pnpm/ramda');

const { testHarnessUnary } = require('../../test/utils');
const updateKeyPaths = require('./update-key-paths');

const updateFooKeyPath = updateKeyPaths({ foo: ['params', 'bar'] });

const cases = [
  [{ foo: 1 }, { params: { bar: 1 } }]
];

map(
  apply(testHarnessUnary(updateFooKeyPath))
)(cases);
