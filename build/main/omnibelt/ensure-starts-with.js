var curry = require('ramda/src/curry');
var unless = require('ramda/src/unless');
var startsWith = require('ramda/src/startsWith');
var concat = require('ramda/src/concat');
/**
 * Ensures a string / array value starts with the specified prefix. If not, the
 * prefix is prepended to the value.
 *
 * @signature String|Array -> String|Array -> String|Array
 */
var ensureStartsWith = curry(function (prefix, currentValue) {
    return unless(startsWith(prefix), concat(prefix))(currentValue);
});
module.exports = ensureStartsWith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLXN0YXJ0cy13aXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2Vuc3VyZS1zdGFydHMtd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNuRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUzQzs7Ozs7R0FLRztBQUNILElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQUMsTUFBTSxFQUFFLFlBQVk7SUFDbEQsT0FBQSxNQUFNLENBQ0osVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ2YsQ0FBQyxZQUFZLENBQUM7QUFIZixDQUdlLENBQ2hCLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDIn0=