const ifElse = require('ramda/src/ifElse');
const isArrayLikeObject = require('lodash/fp/isArrayLikeObject');

const list = require('./list');

/**
 * Takes a value of any type and returns an array. If the value is array-like
 * (e.g. NodeList, arguments) it will be converted to an array; otherwise, it
 * will be wrapped in a new array.
 *
 * @signature * a -> Array a
 */
const ensureArray = ifElse(
  isArrayLikeObject,
  Array.from,
  list,
);

module.exports = ensureArray;
