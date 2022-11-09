const is = require('@pnpm/ramda/src/is');
const allPass = require('@pnpm/ramda/src/allPass');

const isNotEmpty = require('./is-not-empty');

/**
 * Checks if a value is both a string and non-empty.
 *
 * @signature * -> Boolean
 *
 * @example
 *   isPopulatedString('foo');   // true
 *   isPopulatedString('   ');   // true
 *   isPopulatedString('');      // false
 *   isPopulatedString(5);       // false
 *   isPopulatedString(true);    // false
 */
const isPopulatedString = allPass([
  is(String),
  isNotEmpty
]);

module.exports = isPopulatedString;
