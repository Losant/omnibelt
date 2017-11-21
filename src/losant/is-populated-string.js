const { is, allPass } = require('ramda');

const isNotEmpty = require('./is-not-empty');

/**
 * Checks if a value is both a string and non-empty.
 *
 * @signature * -> Boolean
 */
const isPopulatedString = allPass([
  is(String),
  isNotEmpty,
]);

module.exports = isPopulatedString;