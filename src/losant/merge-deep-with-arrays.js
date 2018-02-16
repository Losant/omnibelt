const is = require('ramda/src/is');
const concat = require('ramda/src/concat');
const mergeDeepWith = require('ramda/src/mergeDeepWith');

const mergeDeepWithArrays = mergeDeepWith((x, y) => {
  if (is(Array, x) && is(Array, y)) {
    return concat(x, y);
  }

  return y;
});

module.exports = mergeDeepWithArrays;
