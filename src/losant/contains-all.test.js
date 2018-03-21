const testCases = require('./test-cases');
const containsAll = require('./contains-all');

testCases(containsAll, [
  [
    [[1, 3, 2], [1, 2, 3, 4, 5]],
    true
  ],
  [
    [[1, 2, 3], [1, 2]],
    false 
  ],
  [
    [[3, 2, 1], [1, 2, 3]],
    true 
  ]
]);
