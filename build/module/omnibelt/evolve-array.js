const zipWith = require('ramda/src/zipWith');
const call = require('ramda/src/call');
/**
 * Applies an array of transform functions to an array of values, with each
 * transform being applied to the value that has the same index.
 *
 * @signature [a] -> [b] -> [a(b)]
 *
 * @example
 *   evolveArray([[identity, identity, identity], [2, 2, 2]]); // [2, 2, 2]
 *   evolveArray([inc, dec], [10, 20]); // => [11, 19]
 *   evolveArray([add(2), subtract(5), divide(3)], [10, 20, 30]); // => [12, 15, 10]
 */
const evolveArray = zipWith(call);
module.exports = evolveArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvbHZlLWFycmF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2V2b2x2ZS1hcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM3QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUV2Qzs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDIn0=