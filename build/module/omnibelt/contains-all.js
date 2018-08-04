const curry = require('ramda/src/curry');
const pipe = require('ramda/src/pipe');
const intersection = require('ramda/src/intersection');
const length = require('ramda/src/length');
const equals = require('ramda/src/equals');
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
const containsAll = curry((needle, haystack) => pipe(intersection(needle), length, equals(length(needle)))(haystack));
module.exports = containsAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbnMtYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2NvbnRhaW5zLWFsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN2RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUzQzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUM3QyxJQUFJLENBQ0YsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUNwQixNQUFNLEVBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUN2QixDQUFDLFFBQVEsQ0FBQyxDQUNaLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyJ9