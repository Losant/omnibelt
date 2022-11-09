const {
  map, apply
} = require('@pnpm/ramda');

const { testHarnessUnary } = require('../../test/utils');
const stringToBoolean = require('./string-to-boolean');

const cases = [
  ['true', true],
  ['t', true],
  ['yes', true],
  ['y', true],
  ['True', true],
  ['TRUE', true],
  ['  true  ', true],
  ['false', false],
  ['f', false],
  ['no', false],
  ['n', false],
  ['lskdjfldskj', false],
  ['', false],
  ['sdlkfj_true_lsdkjf', false],
  [null, false],
  [undefined, false]
];

map(
  apply(testHarnessUnary(stringToBoolean))
)(cases);
