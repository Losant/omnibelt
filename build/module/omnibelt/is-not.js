const complement = require('ramda/src/complement');
const is = require('ramda/src/is');
/**
 * Checks if a value is not of a certain type (i.e. the opposite of `is`).
 *
 * @signature * type -> * value -> Boolean
 */
const isNot = complement(is);
module.exports = isNot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2lzLW5vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNuRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFbkM7Ozs7R0FJRztBQUNILE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUU3QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyJ9