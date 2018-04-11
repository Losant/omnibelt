const { testCases } = require('../../test/utils');
const ensureEndsWith = require('./ensure-ends-with');

testCases(ensureEndsWith, [
  [['foo', 'bar-foo'], 'bar-foo'],
  [['foo', 'bar'], 'barfoo'],
  [[[1], [3, 2, 1]], [3, 2, 1]],
  [[[1], [2, 3]], [2, 3, 1]],
  [[[1, 2], [3]], [3, 1, 2]]
]);
