const ifElse = require('ramda/src/ifElse');
const isArrayLikeObject = require('lodash/fp/isArrayLikeObject');
const list = require('./list');
/**
 * Takes a value of any type and returns an array. If the value is array-like
 * (e.g. NodeList, arguments) it will be converted to an array; otherwise, it
 * will be wrapped in a new array.
 *
 * @func
 * @memberof module:omnibelt
 * @name ensureArray
 * @param {Any} data - Any value to ensure
 * @return {Array} An array with `data` unless already an array
 * @summary Any a -> [a]
 *
 * @example
 * ensureArray('foo'); // => ['foo']
 * ensureArray(['foo']); // => ['foo']
 * ensureArray(null); // => [null]
 */
const ensureArray = ifElse(isArrayLikeObject, Array.from, list);
module.exports = ensureArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLWFycmF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2Vuc3VyZS1hcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBRWpFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNILE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FDeEIsaUJBQWlCLEVBQ2pCLEtBQUssQ0FBQyxJQUFJLEVBQ1YsSUFBSSxDQUNMLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyJ9