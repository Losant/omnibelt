var curry = require('ramda/src/curry');
var pipe = require('ramda/src/pipe');
var intersection = require('ramda/src/intersection');
var isNotEmpty = require('./is-not-empty');
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
var containsAny = curry(function (needle, haystack) {
    return pipe(intersection(needle), isNotEmpty)(haystack);
});
module.exports = containsAny;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbnMtYW55LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2NvbnRhaW5zLWFueS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUV2RCxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUU3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBQyxNQUFNLEVBQUUsUUFBUTtJQUN6QyxPQUFBLElBQUksQ0FDRixZQUFZLENBQUMsTUFBTSxDQUFDLEVBQ3BCLFVBQVUsQ0FDWCxDQUFDLFFBQVEsQ0FBQztBQUhYLENBR1csQ0FDWixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMifQ==