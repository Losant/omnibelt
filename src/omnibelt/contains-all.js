import {
  curry, pipe, intersection, length, equals
} from 'ramda';

/**
 * Predicate that checks to see if each element in an array
 * exists in a larger array.
 *
 * @func
 * @memberof module:omnibelt
 * @name containsAll
 * @param {Array} needle - list to check with
 * @param {Array} haystack - list to check against
 * @return {Boolean} True if all are found, false otherwise
 * @summary Array<* a> -> Array<* a> -> Boolean
 *
 * @example
 * containsAll([1, 3, 2], [1, 2, 3, 4, 5]); // => true
 */
const containsAll = curry((needle, haystack) =>
  pipe(
    intersection(needle),
    length,
    equals(length(needle)),
  )(haystack)
);

export default containsAll;
