const curry = require('ramda/src/curry');
const pipe = require('ramda/src/pipe');
const intersection = require('ramda/src/intersection');

const isNotEmpty = require('./is-not-empty');

/**
 * Takes two arrays and returns true if any of the values in the first array
 * are found in the second array.
 *
 * @func
 * @memberof module:losant
 * @name containsAny
 * @param {Array} needle - list to check with
 * @param {Array} haystack - list to check against
 * @return {Boolean} True if any are found, false otherwise
 * @summary Array<* a> -> Array<* a> -> Boolean
 *
 * @example
 * containsAny([1, 2], [1, 2, 3]); // => true
 * containsAny(['foo'], ['foo', 'bar']); // => true
 * containsAny([null], [null, 'foo']); // => true
 * containsAny([1], ['foo']); // => false
 * containsAny([], ['foo']); // => false
 * containsAny(['foo'], []); // => false
 */
const containsAny = curry((needle, haystack) =>
  pipe(
    intersection(needle),
    isNotEmpty,
  )(haystack)
);

module.exports = containsAny;
