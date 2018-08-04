const { map, isNil } = require('ramda');
const { testHarnessUnary } = require('../../test/utils');
const mapRejectNil = require('./map-reject-nil');
const cases = [
    {
        label: 'map reject nil',
        cases: [
            [
                (a) => {
                    if (a === 1) {
                        return null;
                    }
                    if (a === 4) {
                        return undefined;
                    }
                    if (isNil(a)) {
                        return -1;
                    }
                    return `a${a}`;
                },
                [null, 1, 2, undefined, 1, 4, 0, '', false],
                [-1, 'a2', -1, 'a0', 'a', 'afalse']
            ]
        ]
    }
];
const testHarnessAdapter = ({ label, cases }) => {
    const runTestCase = (testCase) => {
        const [transform, input, expected] = testCase;
        const func = mapRejectNil(transform);
        return testHarnessUnary(func, input, expected);
    };
    describe(label, () => {
        return map(runTestCase, cases);
    });
};
map(testHarnessAdapter)(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXJlamVjdC1uaWwudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9tYXAtcmVqZWN0LW5pbC50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXhDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRWpELE1BQU0sS0FBSyxHQUFHO0lBQ1o7UUFDRSxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLEtBQUssRUFBRTtZQUNMO2dCQUNFLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUFFLE9BQU8sSUFBSSxDQUFDO3FCQUFFO29CQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQUUsT0FBTyxTQUFTLENBQUM7cUJBQUU7b0JBQ2xDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQUU7b0JBQzVCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFDRCxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQzthQUNwQztTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7SUFDOUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUMvQixNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFOUMsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJDLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNuQixPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9