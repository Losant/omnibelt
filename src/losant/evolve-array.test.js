const { inc, dec, identity } = require('ramda');
const testCases = require('../../test/test-cases');
const evolveArray = require('./evolve-array');

testCases(evolveArray, [
  [
    [ [ identity, identity, identity ], [ 2, 2, 2 ] ],
    [ 2, 2, 2 ]
  ],
  [
    [ [ inc, dec, inc ], [ 2, 2, 2 ] ],
    [ 3, 1, 3 ]
  ]
]);
