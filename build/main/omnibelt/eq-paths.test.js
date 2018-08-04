var map = require('ramda').map;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var eqPaths = require('./eq-paths');
var cases = [
    {
        label: 'a.b === 1',
        cases: [
            [
                ['a', 'b'],
                { a: { b: 1 } },
                { a: { b: 1 } },
                true
            ],
            [
                ['a', 'b'],
                { a: { b: 1 } },
                { a: { b: 2 } },
                false
            ]
        ]
    }
];
var testHarnessAdapter = function (_a) {
    var label = _a.label, cases = _a.cases;
    var runTestCase = function (testCase) {
        var pathToCheck = testCase[0], obj1 = testCase[1], obj2 = testCase[2], expected = testCase[3];
        var func = eqPaths(pathToCheck, obj1);
        var subject = obj2;
        return testHarnessUnary(func, subject, expected);
    };
    describe(label, function () {
        return map(runTestCase, cases);
    });
};
map(testHarnessAdapter)(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXEtcGF0aHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9lcS1wYXRocy50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLElBQUEsMEJBQUcsQ0FBc0I7QUFFekIsSUFBQSwrREFBZ0IsQ0FBaUM7QUFDekQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXRDLElBQU0sS0FBSyxHQUFHO0lBQ1o7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixLQUFLLEVBQUU7WUFDTDtnQkFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2YsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2YsSUFBSTthQUNMO1lBQ0Q7Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNmLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNmLEtBQUs7YUFDTjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLEVBQWdCO1FBQWQsZ0JBQUssRUFBRSxnQkFBSztJQUN4QyxJQUFNLFdBQVcsR0FBRyxVQUFDLFFBQVE7UUFDcEIsSUFBQSx5QkFBVyxFQUFFLGtCQUFJLEVBQUUsa0JBQUksRUFBRSxzQkFBUSxDQUFhO1FBRXJELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXJCLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ2QsT0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMifQ==