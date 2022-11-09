const curry = require('@pnpm/ramda/src/curry');
const pipe = require('@pnpm/ramda/src/pipe');
const intersection = require('@pnpm/ramda/src/intersection');

const isNotEmpty = require('./is-not-empty');

/**
 * Takes two arrays and returns true if any of the values in the first array
 * are found in the second array.
 *
 * @func
 * @memberof module:omnibelt
 * @name containsAny
 * @param {Array} needle - list to check with
 * @param {Array} haystack - list to check against
 * @return {Boolean} True if any are found, false otherwise
 * @summary Array<* a> -> Array<* a> -> Boolean
 *
 * @example
 * containsAny([1, 2], [1, 2, 3]); // => true
 * containsAny([0, 2, 4, 5, 6], [1, 2, 3]); // => true
 * containsAny(['foo'], ['foo', 'bar']); // => true
 * containsAny([null], [null, 'foo']); // => true
 * containsAny([1], ['foo']); // => false
 * containsAny([], ['foo']); // => false
 * containsAny(['foo'], []); // => false
 */
const containsAny = curry((needle, haystack) =>
  pipe(
    intersection(needle),
    isNotEmpty
  )(haystack)
);

module.exports = containsAny;
