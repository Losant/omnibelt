// TODO: Write tests for this?
// TODO: Write README entry for this?
// TODO: https://github.com/Losant/omnibelt/issues/40
// NOTE: See `tap` or `count` tests for example usage.
const curry = require('ramda/src/curry');
const map = require('ramda/src/map');
const apply = require('ramda/src/apply');
const testHarness = require('./test-harness');
// testCases :: Expect -> Function -> [[[*], *]]
const testCases = curry((expect, fn, cases) => {
    map(apply(testHarness(expect, fn)))(cases);
});
module.exports = testCases;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jYXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC90ZXN0LWNhc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QixxQ0FBcUM7QUFDckMscURBQXFEO0FBQ3JELHNEQUFzRDtBQUV0RCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFOUMsZ0RBQWdEO0FBQ2hELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDNUMsR0FBRyxDQUNELEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQy9CLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIn0=