const compose = require('ramda/src/compose');
const uniq = require('ramda/src/uniq');
const length = require('ramda/src/length');
const equals = require('ramda/src/equals');
/**
 * Checks to see if all elements in an array are the same.
 *
 * @func
 * @memberof module:omnibelt
 * @name allEqual
 * @param {Array} array - An array of any values
 * @return {Boolean} True when all same, false otherwise
 * @summary Array -> Boolean
 *
 * @example
 * TODO
 */
const allEqual = compose(equals(1), length, uniq);
module.exports = allEqual;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWVxdWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2FsbC1lcXVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM3QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUzQzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVsRCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyJ9