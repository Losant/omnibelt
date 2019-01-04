const flip = require('ramda/src/flip');
const contains = require('ramda/src/contains');

/**
 * Predicate that checks to see if a value exists in an array.
 *
 * @signature Array<* a> -> a -> Boolean
 *
 * @example
 * equalsAny([1, 2, 3], 2); // => true
 * equalsAny(['a', 'b', 'c'], 2); // => false
 */
const equalsAny = flip(contains);

module.exports = equalsAny;