// TODO: Write tests for this?
// TODO: Write README entry for this?
// TODO: https://github.com/Losant/omnibelt/issues/40
// NOTE: See `tap` or `count` tests for example usage.
var curry = require('ramda/src/curry');
var map = require('ramda/src/map');
var apply = require('ramda/src/apply');
var testHarness = require('./test-harness');
// testCases :: Expect -> Function -> [[[*], *]]
var testCases = curry(function (expect, fn, cases) {
    map(apply(testHarness(expect, fn)))(cases);
});
module.exports = testCases;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jYXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC90ZXN0LWNhc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QixxQ0FBcUM7QUFDckMscURBQXFEO0FBQ3JELHNEQUFzRDtBQUV0RCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFOUMsZ0RBQWdEO0FBQ2hELElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSztJQUN4QyxHQUFHLENBQ0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDL0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMifQ==