const { complement, isNil } = require('ramda');

/**
 * Takes a value and returns true if the value is neither null nor undefined;
 * returns false if not.
 *
 * @signature * -> Boolean
 */
const isNotNil = complement(isNil);

module.exports = isNotNil;
