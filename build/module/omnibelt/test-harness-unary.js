// TODO: REMOVE THIS! This has been deprecated!
//       See `test-harness` for its successor (and `test-cases`)
//       The upgrade path is to incrementally update tests that use this
// TODO: https://github.com/Losant/omnibelt/issues/39
// TODO: https://github.com/Losant/omnibelt/issues/40
const curry = require('ramda/src/curry');
const map = require('ramda/src/map');
const pipe = require('ramda/src/pipe');
const format = require('./format');
const stringify = require('./stringify');
const testHarnessUnary = curry((expect, func, subj, expected) => {
    it(pipe(map(stringify), format('{subj} ==> {expected}'))({ subj, expected }), () => expect(func(subj)).toEqual(expected));
});
module.exports = testHarnessUnary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1oYXJuZXNzLXVuYXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3Rlc3QtaGFybmVzcy11bmFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsZ0VBQWdFO0FBQ2hFLHdFQUF3RTtBQUN4RSxxREFBcUQ7QUFDckQscURBQXFEO0FBRXJELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNyQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUU7SUFDOUQsRUFBRSxDQUNBLElBQUksQ0FDRixHQUFHLENBQUMsU0FBUyxDQUFDLEVBQ2QsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQ2hDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFDckIsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FDM0MsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyJ9