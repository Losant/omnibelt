var map = require('ramda').map;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var filterMap = require('./filter-map');
var cases = [
    {
        label: 'filterMap - filter even, then add 1',
        cases: [
            [
                function (a) { return a % 2 === 0; },
                function (a) { return a + 1; },
                [0, 1, 2, 3, 4],
                [1, 3, 5]
            ]
        ]
    }
];
var testHarnessAdapter = function (_a) {
    var label = _a.label, cases = _a.cases;
    var runTestCase = function (testCase) {
        var predicate = testCase[0], transform = testCase[1], input = testCase[2], expected = testCase[3];
        var func = filterMap(predicate, transform);
        return testHarnessUnary(func, input, expected);
    };
    describe(label, function () {
        return map(runTestCase, cases);
    });
};
map(testHarnessAdapter)(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1hcC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2ZpbHRlci1tYXAudGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxJQUFBLDBCQUFHLENBQXNCO0FBRXpCLElBQUEsK0RBQWdCLENBQWlDO0FBQ3pELElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUxQyxJQUFNLEtBQUssR0FBRztJQUNaO1FBQ0UsS0FBSyxFQUFFLHFDQUFxQztRQUM1QyxLQUFLLEVBQUU7WUFDTDtnQkFDRSxVQUFDLENBQUMsSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsVUFBQyxDQUFDLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDVjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLEVBQWdCO1FBQWQsZ0JBQUssRUFBRSxnQkFBSztJQUN4QyxJQUFNLFdBQVcsR0FBRyxVQUFDLFFBQVE7UUFDcEIsSUFBQSx1QkFBUyxFQUFFLHVCQUFTLEVBQUUsbUJBQUssRUFBRSxzQkFBUSxDQUFhO1FBRXpELElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFN0MsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQztJQUVGLFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9