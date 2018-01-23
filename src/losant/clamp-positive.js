import { clamp } from 'ramda';

/**
 * Clamps a numeric value so that it's guaranteed to be 0 or higher. Works with
 * Numbers and other ordered types like Strings and Dates, though the behavior
 * when given a String is inconsistent (e.g. `clampPositive('5')` returns the
 * String '5', `clampPositive('-1')` returns the Number 0, and `clampPositive('foo')`
 * returns the string 'foo'). If given NaN it will return NaN.
 *
 * @signature Number -> Number
 *
 * @example
 *     clampPositive(-1); // => 0
 *     clampPositive(0); // => 0
 *     clampPositive(20); // => 20
 *     clampPositive(-Infinity); // => 0
 *     clampPositive(Infinity); // => Infinity
 *     clampPositive(NaN); // => NaN
 */
const clampPositive = clamp(0, Infinity);

module.exports = clampPositive;
