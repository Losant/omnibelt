const { map, apply } = require('ramda');

const testHarness = require('./test-harness');
const updateKeys = require('./update-keys');

const updateFooKey = updateKeys({ foo: 'bar' });

const cases = [
  [{ foo: 1 }, { bar: 1 }],
];

map(
  apply(testHarness(updateFooKey))
)(cases);
