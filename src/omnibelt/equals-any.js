const flip = require('@pnpm/ramda/src/flip');
const includes = require('@pnpm/ramda/src/includes');

/**
 * Predicate that checks to see if a value exists in an array.
 *
 * @signature Array<* a> -> a -> Boolean
 *
 * @example
 * equalsAny([1, 2, 3], 2); // => true
 * equalsAny(['a', 'b', 'c'], 2); // => false
 */
const equalsAny = flip(includes);

module.exports = equalsAny;
