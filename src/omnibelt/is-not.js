const complement = require('@pnpm/ramda/src/complement');
const is = require('@pnpm/ramda/src/is');

/**
 * Checks if a value is not of a certain type (i.e. the opposite of `is`).
 *
 * @signature * type -> * value -> Boolean
 */
const isNot = complement(is);

module.exports = isNot;
