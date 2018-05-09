const { testCases } = require('../../test/utils');
const equalsAny = require('./equals-any');

testCases(equalsAny, [
  [
    [[1, 2, 3], 2],
    true
  ],
  [
    [[1, 2, 3], 5],
    false
  ],
  [
    [['foo', 2, []], 2],
    true
  ],
  [
    [
      [
        { foo: 'foo' },
        { bar: 'bar' },
        { baz: 'baz' }
      ],
      { foo: 'foo' }
    ],
    true
  ],
  [
    [[1, 2, 3], [2, 3]],
    false
  ]
]);
