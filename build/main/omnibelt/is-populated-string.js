var is = require('ramda/src/is');
var allPass = require('ramda/src/allPass');
var isNotEmpty = require('./is-not-empty');
/**
 * Checks if a value is both a string and non-empty.
 *
 * @signature * -> Boolean
 *
 * @example
 *   isPopulatedString('foo');   // true
 *   isPopulatedString('   ');   // true
 *   isPopulatedString('');      // false
 *   isPopulatedString(5);       // false
 *   isPopulatedString(true);    // false
 */
var isPopulatedString = allPass([
    is(String),
    isNotEmpty
]);
module.exports = isPopulatedString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtcG9wdWxhdGVkLXN0cmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9pcy1wb3B1bGF0ZWQtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUU3QyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUU3Qzs7Ozs7Ozs7Ozs7R0FXRztBQUNILElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDVixVQUFVO0NBQ1gsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyJ9