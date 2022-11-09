const { map, apply } = require('@pnpm/ramda');

const { testHarnessUnary } = require('../../test/utils');
const within = require('./within');

const withinRange = within(5, 15);

const cases = [
  [10, true],
  [14.5, true],
  [5, false],
  [15, false]
];

map(
  apply(testHarnessUnary(withinRange))
)(cases);
