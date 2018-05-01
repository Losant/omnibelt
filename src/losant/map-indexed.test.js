const { testCases } = require('../../test/utils');
const mapIndexed = require('./map-indexed');

testCases(mapIndexed, [
  [
    [(value, index) => `${value}-${index}`, ['a', 'b']],
    ['a-0', 'b-1']
  ],
  // Used to demonstrate that this doesn't do what you might expect for objects.
  // You should use `R.mapObjIndexed`.
  [
    [(value, index) => `${value}-${index}`, { foo: 'a', bar: 'b' }],
    { foo: 'a-0', bar: 'b-1' }
  ]
]);
