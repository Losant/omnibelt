const { complement, is, isEmpty, allPass } = require('ramda');

/**
 * Checks if a value is both a string and non-empty.
 *
 * @signature * -> Boolean
 */
const isPopulatedString = allPass([
  is(String),
  complement(isEmpty),
]);

module.exports = isPopulatedString;
