var clamp = require('ramda/src/clamp');
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
var clampPositive = clamp(0, Infinity);
module.exports = clampPositive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhbXAtcG9zaXRpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvY2xhbXAtcG9zaXRpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUNILElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFekMsTUFBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMifQ==