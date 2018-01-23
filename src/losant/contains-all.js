import { curry, pipe, intersection, length, equals } from 'ramda';

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature Array<* a> -> Array<* a> -> Boolean
 *
 * @example
 *     containsAll([1, 2, 3], [1, 2, 3, 4, 5]); // => true
 */
const containsAll = curry((smaller, larger) =>
  pipe(
    intersection(smaller),
    length,
    equals(length(smaller)),
  )(larger)
);

module.exports = containsAll;
