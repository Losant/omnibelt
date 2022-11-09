const complement = require('ramda/src/complement.js');
const is = require('ramda/src/is.js');

/**
 * Checks if a value is not of a certain type (i.e. the opposite of `is`).
 *
 * @signature * type -> * value -> Boolean
 */
const isNot = complement(is);

module.exports = isNot;
