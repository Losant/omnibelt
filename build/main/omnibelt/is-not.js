var complement = require('ramda/src/complement');
var is = require('ramda/src/is');
/**
 * Checks if a value is not of a certain type (i.e. the opposite of `is`).
 *
 * @signature * type -> * value -> Boolean
 */
var isNot = complement(is);
module.exports = isNot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2lzLW5vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNuRCxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFbkM7Ozs7R0FJRztBQUNILElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUU3QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyJ9