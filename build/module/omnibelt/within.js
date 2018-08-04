const __ = require('ramda/src/__');
const curry = require('ramda/src/curry');
const gt = require('ramda/src/gt');
const lt = require('ramda/src/lt');
const both = require('ramda/src/both');
/**
 * @signature Number -> Number -> Number -> Boolean
 */
const within = curry((start, end, value) => both(gt(__, start), lt(__, end))(value));
module.exports = within;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3dpdGhpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbkMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUV2Qzs7R0FFRztBQUNILE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FDbEIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3BCLElBQUksQ0FDRixFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUNiLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQ1osQ0FBQyxLQUFLLENBQUMsQ0FDWCxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMifQ==