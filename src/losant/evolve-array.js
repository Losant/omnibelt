import { zipWith, call } from 'ramda';

/**
 * Applies an array of transform functions to an array of values, with each
 * transform being applied to the value that has the same index.
 *
 * TODO: TESTS
 *
 * @signature [a -> b] -> [a] -> [b]
 *
 * @example
 *     evolveArray([inc, dec], [10, 20]); // => [11, 19]
 *     evolveArray([add(2), subtract(5), divide(3)], [10, 20, 30]); // => [12, 15, 10]
 */
const evolveArray = zipWith(call);

module.exports = evolveArray;
