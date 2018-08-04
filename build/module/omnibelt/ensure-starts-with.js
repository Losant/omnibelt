const curry = require('ramda/src/curry');
const unless = require('ramda/src/unless');
const startsWith = require('ramda/src/startsWith');
const concat = require('ramda/src/concat');
/**
 * Ensures a string / array value starts with the specified prefix. If not, the
 * prefix is prepended to the value.
 *
 * @signature String|Array -> String|Array -> String|Array
 */
const ensureStartsWith = curry((prefix, currentValue) => unless(startsWith(prefix), concat(prefix))(currentValue));
module.exports = ensureStartsWith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLXN0YXJ0cy13aXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2Vuc3VyZS1zdGFydHMtd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNuRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUzQzs7Ozs7R0FLRztBQUNILE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQ3RELE1BQU0sQ0FDSixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDZixDQUFDLFlBQVksQ0FBQyxDQUNoQixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyJ9