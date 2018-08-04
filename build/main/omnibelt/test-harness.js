// TODO: Write tests for this?
// TODO: Write README entry for this?
// TODO: https://github.com/Losant/omnibelt/issues/40
// NOTE: See `string-to-boolean` tests for example usage.
var curry = require('ramda/src/curry');
var compose = require('ramda/src/compose');
var evolve = require('ramda/src/evolve');
var map = require('ramda/src/map');
var format = require('./format');
var stringify = require('./stringify');
var testCaseToString = compose(format('({args}) => {expected}'), evolve({
    args: map(stringify),
    expected: stringify
}));
// testHarness :: Expect -> Function -> [*] -> *
var testHarness = curry(function (expect, fn, args, expected) {
    it(testCaseToString({ args: args, expected: expected }), function () { return expect(fn.apply(void 0, args)).toEqual(expected); });
});
module.exports = testHarness;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1oYXJuZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3Rlc3QtaGFybmVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUIscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCx5REFBeUQ7QUFFekQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXJDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFekMsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQzlCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxFQUNoQyxNQUFNLENBQUM7SUFDTCxJQUFJLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNwQixRQUFRLEVBQUUsU0FBUztDQUNwQixDQUFDLENBQ0gsQ0FBQztBQUVGLGdEQUFnRDtBQUNoRCxJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRO0lBQ25ELEVBQUUsQ0FDQSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsRUFDcEMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxFQUFFLGVBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFyQyxDQUFxQyxDQUM1QyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyJ9