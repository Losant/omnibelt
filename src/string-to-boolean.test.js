const {
  map, apply,
} = require('ramda');
const testHarness = require('./test-harness');
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
];

map(
  apply(testHarness(stringToBoolean))
)(cases);
