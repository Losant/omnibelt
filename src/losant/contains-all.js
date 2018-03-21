const curry = require('ramda/src/curry');
const pipe = require('ramda/src/pipe');
const intersection = require('ramda/src/intersection');
const length = require('ramda/src/length');
const equals = require('ramda/src/equals');

/**
 * Predicate that checks to see if each element in an array
 * exists in a larger array.
 *
 * @signature Array<* a> -> Array<* a> -> Boolean
 *
 * @example
 *   containsAll([1, 3, 2], [1, 2, 3, 4, 5]); // => true
 */
const containsAll = curry((smaller, larger) =>
  pipe(
    intersection(smaller),
    length,
    equals(length(smaller)),
  )(larger)
);

module.exports = containsAll;
