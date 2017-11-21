const { ifElse, allPass } = require('ramda');
const { isArrayLike } = require('lodash/fp');

const list = require('./list');
const isNot = require('./is-not');

// TODO: TESTS
// TODO: DOCS

/**
 * Takes a value of any type and returns an array. If the value is array-like
 * (e.g. NodeList) it will be converted to an array; otherwise, it will be
 * wrapped in a new array.
 *
 * @signature * a -> Array a
 */
const ensureArray = ifElse(
  allPass([
    isArrayLike,
    isNot(String),
  ]),
  Array.from,
  list,
);

module.exports = ensureArray;
