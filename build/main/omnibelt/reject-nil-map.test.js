var _a = require('ramda'), map = _a.map, isNil = _a.isNil;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var rejectNilMap = require('./reject-nil-map');
var cases = [
    {
        label: 'reject nil map',
        cases: [
            [
                function (a) {
                    if (a === 1) {
                        return undefined;
                    }
                    if (a === 4) {
                        return null;
                    }
                    if (isNil(a)) {
                        return -1;
                    }
                    return "a" + a;
                },
                [null, 1, 2, undefined, 1, 4, 0, '', false],
                [undefined, 'a2', undefined, null, 'a0', 'a', 'afalse']
            ]
        ]
    }
];
var testHarnessAdapter = function (_a) {
    var label = _a.label, cases = _a.cases;
    var runTestCase = function (testCase) {
        var transform = testCase[0], input = testCase[1], expected = testCase[2];
        var func = rejectNilMap(transform);
        return testHarnessUnary(func, input, expected);
    };
    describe(label, function () {
        return map(runTestCase, cases);
    });
};
map(testHarnessAdapter)(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVqZWN0LW5pbC1tYXAudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9yZWplY3QtbmlsLW1hcC50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFNLElBQUEscUJBQWlDLEVBQS9CLFlBQUcsRUFBRSxnQkFBSyxDQUFzQjtBQUVoQyxJQUFBLCtEQUFnQixDQUFpQztBQUN6RCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVqRCxJQUFNLEtBQUssR0FBRztJQUNaO1FBQ0UsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixLQUFLLEVBQUU7WUFDTDtnQkFDRSxVQUFDLENBQUM7b0JBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUFFLE9BQU8sU0FBUyxDQUFDO3FCQUFFO29CQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQUUsT0FBTyxJQUFJLENBQUM7cUJBQUU7b0JBQzdCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQUU7b0JBQzVCLE9BQU8sTUFBSSxDQUFHLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0QsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDM0MsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7YUFDeEQ7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUcsVUFBQyxFQUFnQjtRQUFkLGdCQUFLLEVBQUUsZ0JBQUs7SUFDeEMsSUFBTSxXQUFXLEdBQUcsVUFBQyxRQUFRO1FBQ3BCLElBQUEsdUJBQVMsRUFBRSxtQkFBSyxFQUFFLHNCQUFRLENBQWE7UUFFOUMsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJDLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ2QsT0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMifQ==