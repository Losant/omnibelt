const curry = require('ramda/src/curry');
const pipe = require('ramda/src/pipe');
const intersection = require('ramda/src/intersection');
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
const containsAny = curry((needle, haystack) => pipe(intersection(needle), isNotEmpty)(haystack));
module.exports = containsAny;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbnMtYW55LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2NvbnRhaW5zLWFueS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUV2RCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUU3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FDN0MsSUFBSSxDQUNGLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFDcEIsVUFBVSxDQUNYLENBQUMsUUFBUSxDQUFDLENBQ1osQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDIn0=