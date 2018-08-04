var curry = require('ramda/src/curry');
var pipe = require('ramda/src/pipe');
var intersection = require('ramda/src/intersection');
var length = require('ramda/src/length');
var equals = require('ramda/src/equals');
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
var containsAll = curry(function (needle, haystack) {
    return pipe(intersection(needle), length, equals(length(needle)))(haystack);
});
module.exports = containsAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbnMtYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2NvbnRhaW5zLWFsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN2RCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUzQzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFDLE1BQU0sRUFBRSxRQUFRO0lBQ3pDLE9BQUEsSUFBSSxDQUNGLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFDcEIsTUFBTSxFQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDdkIsQ0FBQyxRQUFRLENBQUM7QUFKWCxDQUlXLENBQ1osQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDIn0=