var _a = require('ramda'), map = _a.map, isNil = _a.isNil;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var mapRejectNil = require('./map-reject-nil');
var cases = [
    {
        label: 'map reject nil',
        cases: [
            [
                function (a) {
                    if (a === 1) {
                        return null;
                    }
                    if (a === 4) {
                        return undefined;
                    }
                    if (isNil(a)) {
                        return -1;
                    }
                    return "a" + a;
                },
                [null, 1, 2, undefined, 1, 4, 0, '', false],
                [-1, 'a2', -1, 'a0', 'a', 'afalse']
            ]
        ]
    }
];
var testHarnessAdapter = function (_a) {
    var label = _a.label, cases = _a.cases;
    var runTestCase = function (testCase) {
        var transform = testCase[0], input = testCase[1], expected = testCase[2];
        var func = mapRejectNil(transform);
        return testHarnessUnary(func, input, expected);
    };
    describe(label, function () {
        return map(runTestCase, cases);
    });
};
map(testHarnessAdapter)(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXJlamVjdC1uaWwudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9tYXAtcmVqZWN0LW5pbC50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFNLElBQUEscUJBQWlDLEVBQS9CLFlBQUcsRUFBRSxnQkFBSyxDQUFzQjtBQUVoQyxJQUFBLCtEQUFnQixDQUFpQztBQUN6RCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVqRCxJQUFNLEtBQUssR0FBRztJQUNaO1FBQ0UsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixLQUFLLEVBQUU7WUFDTDtnQkFDRSxVQUFDLENBQUM7b0JBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUFFLE9BQU8sSUFBSSxDQUFDO3FCQUFFO29CQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQUUsT0FBTyxTQUFTLENBQUM7cUJBQUU7b0JBQ2xDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQUU7b0JBQzVCLE9BQU8sTUFBSSxDQUFHLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0QsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7YUFDcEM7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUcsVUFBQyxFQUFnQjtRQUFkLGdCQUFLLEVBQUUsZ0JBQUs7SUFDeEMsSUFBTSxXQUFXLEdBQUcsVUFBQyxRQUFRO1FBQ3BCLElBQUEsdUJBQVMsRUFBRSxtQkFBSyxFQUFFLHNCQUFRLENBQWE7UUFFOUMsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJDLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ2QsT0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMifQ==