const either = require('ramda/src/either');
const isNil = require('ramda/src/isNil');
const isEmpty = require('ramda/src/isEmpty');
/**
 * Checks if a value is null, undefined, an empty string, an empty object, an empty array.
 *
 * @see R.isNil
 * @see R.isEmpty
 *
 * @signature * -> Boolean
 */
const isNilOrEmpty = either(isNil, isEmpty);
module.exports = isNilOrEmpty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbmlsLW9yLWVtcHR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2lzLW5pbC1vci1lbXB0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUU3Qzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUU1QyxNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyJ9