const { testCases } = require('../../test/utils');
const containsAny = require('./contains-any');

testCases(containsAny, [
  [
    [[1, 2], [1, 2, 3]],
    true
  ],
  [
    [[0, 2, 4, 5, 6], [1, 2, 3]],
    true
  ],
  [
    [['foo'], ['foo', 'bar']],
    true
  ],
  [
    [[null], [null, 'foo']],
    true
  ],
  [
    [[1], ['foo']],
    false
  ],
  [
    [[], ['foo']],
    false
  ],
  [
    [['foo'], []],
    false
  ]
]);
