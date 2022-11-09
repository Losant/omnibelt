const clamp = require('ramda/src/clamp.js');

/**
 * Clamps a numeric value so that it's guaranteed to be 0 or higher. Works with
 * Numbers and other ordered types like Strings and Dates, though the behavior
 * when given a String is inconsistent (e.g. `clampPositive('5')` returns the
 * String '5', `clampPositive('-1')` returns the Number 0, and `clampPositive('foo')`
 * returns the string 'foo'). If given NaN it will return NaN.
 *
 * @func
 * @memberof module:omnibelt
 * @name clampPositive
 * @param {Number} toClamp - Any number to clamp
 * @return {Number} `toClamp` or 0 if the number was negative
 * @summary Number -> Number
 *
 * @example
 * clampPositive(-1); // => 0
 * clampPositive(0); // => 0
 * clampPositive(20); // => 20
 * clampPositive(-Infinity); // => 0
 * clampPositive(Infinity); // => Infinity
 * clampPositive(NaN); // => NaN
 */
const clampPositive = clamp(0, Infinity);

module.exports = clampPositive;
