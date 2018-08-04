// TODO: Write tests for this?
// TODO: Write README entry for this?
// TODO: https://github.com/Losant/omnibelt/issues/40
// NOTE: See `string-to-boolean` tests for example usage.
const curry = require('ramda/src/curry');
const compose = require('ramda/src/compose');
const evolve = require('ramda/src/evolve');
const map = require('ramda/src/map');
const format = require('./format');
const stringify = require('./stringify');
const testCaseToString = compose(format('({args}) => {expected}'), evolve({
    args: map(stringify),
    expected: stringify
}));
// testHarness :: Expect -> Function -> [*] -> *
const testHarness = curry((expect, fn, args, expected) => {
    it(testCaseToString({ args, expected }), () => expect(fn(...args)).toEqual(expected));
});
module.exports = testHarness;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1oYXJuZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3Rlc3QtaGFybmVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUIscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCx5REFBeUQ7QUFFekQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXJDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFekMsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQzlCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxFQUNoQyxNQUFNLENBQUM7SUFDTCxJQUFJLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNwQixRQUFRLEVBQUUsU0FBUztDQUNwQixDQUFDLENBQ0gsQ0FBQztBQUVGLGdEQUFnRDtBQUNoRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUN2RCxFQUFFLENBQ0EsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFDcEMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUM1QyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyJ9