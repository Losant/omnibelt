var map = require('ramda').map;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var mapFilter = require('./map-filter');
var cases = [
    {
        label: 'mapFilter - add 1, then filter even',
        cases: [
            [
                function (a) { return a % 2 === 0; },
                function (a) { return a + 1; },
                [0, 1, 2, 3, 4],
                [2, 4]
            ]
        ]
    }
];
var testHarnessAdapter = function (_a) {
    var label = _a.label, cases = _a.cases;
    var runTestCase = function (testCase) {
        var predicate = testCase[0], transform = testCase[1], input = testCase[2], expected = testCase[3];
        var func = mapFilter(predicate, transform);
        return testHarnessUnary(func, input, expected);
    };
    describe(label, function () {
        return map(runTestCase, cases);
    });
};
map(testHarnessAdapter)(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWZpbHRlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L21hcC1maWx0ZXIudGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxJQUFBLDBCQUFHLENBQXNCO0FBRXpCLElBQUEsK0RBQWdCLENBQWlDO0FBQ3pELElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUxQyxJQUFNLEtBQUssR0FBRztJQUNaO1FBQ0UsS0FBSyxFQUFFLHFDQUFxQztRQUM1QyxLQUFLLEVBQUU7WUFDTDtnQkFDRSxVQUFDLENBQUMsSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsVUFBQyxDQUFDLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFRixJQUFNLGtCQUFrQixHQUFHLFVBQUMsRUFBZ0I7UUFBZCxnQkFBSyxFQUFFLGdCQUFLO0lBQ3hDLElBQU0sV0FBVyxHQUFHLFVBQUMsUUFBUTtRQUNwQixJQUFBLHVCQUFTLEVBQUUsdUJBQVMsRUFBRSxtQkFBSyxFQUFFLHNCQUFRLENBQWE7UUFFekQsSUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU3QyxPQUFPLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDO0lBRUYsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUNkLE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=