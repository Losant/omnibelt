var compose = require('ramda/src/compose');
var uniq = require('ramda/src/uniq');
var length = require('ramda/src/length');
var equals = require('ramda/src/equals');
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
var allEqual = compose(equals(1), length, uniq);
module.exports = allEqual;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWVxdWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2FsbC1lcXVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM3QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUzQzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVsRCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyJ9