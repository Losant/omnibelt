var either = require('ramda/src/either');
var isNil = require('ramda/src/isNil');
var isEmpty = require('ramda/src/isEmpty');
/**
 * Checks if a value is null, undefined, an empty string, an empty object, an empty array.
 *
 * @see R.isNil
 * @see R.isEmpty
 *
 * @signature * -> Boolean
 */
var isNilOrEmpty = either(isNil, isEmpty);
module.exports = isNilOrEmpty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbmlsLW9yLWVtcHR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2lzLW5pbC1vci1lbXB0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUU3Qzs7Ozs7OztHQU9HO0FBQ0gsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUU1QyxNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyJ9