const { map, isNil } = require('ramda');
const { testHarnessUnary } = require('../../test/utils');
const rejectNilMap = require('./reject-nil-map');
const cases = [
    {
        label: 'reject nil map',
        cases: [
            [
                (a) => {
                    if (a === 1) {
                        return undefined;
                    }
                    if (a === 4) {
                        return null;
                    }
                    if (isNil(a)) {
                        return -1;
                    }
                    return `a${a}`;
                },
                [null, 1, 2, undefined, 1, 4, 0, '', false],
                [undefined, 'a2', undefined, null, 'a0', 'a', 'afalse']
            ]
        ]
    }
];
const testHarnessAdapter = ({ label, cases }) => {
    const runTestCase = (testCase) => {
        const [transform, input, expected] = testCase;
        const func = rejectNilMap(transform);
        return testHarnessUnary(func, input, expected);
    };
    describe(label, () => {
        return map(runTestCase, cases);
    });
};
map(testHarnessAdapter)(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVqZWN0LW5pbC1tYXAudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9yZWplY3QtbmlsLW1hcC50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXhDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRWpELE1BQU0sS0FBSyxHQUFHO0lBQ1o7UUFDRSxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLEtBQUssRUFBRTtZQUNMO2dCQUNFLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUFFLE9BQU8sU0FBUyxDQUFDO3FCQUFFO29CQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQUUsT0FBTyxJQUFJLENBQUM7cUJBQUU7b0JBQzdCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQUU7b0JBQzVCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFDRCxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO2dCQUMzQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQzthQUN4RDtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7SUFDOUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUMvQixNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFOUMsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJDLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNuQixPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9