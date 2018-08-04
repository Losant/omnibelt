const mergeWithArrays = require('./merge-with-arrays');
describe('mergeWithArrays', () => {
    it('merges arrays instead of overriding', () => {
        const x = {
            foo: [1, 2, 3],
            bar: {
                a: 'a',
                c: 1
            },
            a: 3
        };
        const y = {
            foo: [4],
            bar: {
                a: 'new',
                b: 'b'
            },
            a: 4
        };
        const expected = {
            foo: [1, 2, 3, 4],
            bar: {
                a: 'new',
                b: 'b',
                c: 1
            },
            a: 4
        };
        expect(mergeWithArrays(x, y)).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2Utd2l0aC1hcnJheXMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9tZXJnZS13aXRoLWFycmF5cy50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRXZELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFFL0IsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsRUFBRTtRQUM3QyxNQUFNLENBQUMsR0FBRztZQUNSLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsR0FBRyxFQUFFO2dCQUNILENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxDQUFDO2FBQ0w7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMLENBQUM7UUFDRixNQUFNLENBQUMsR0FBRztZQUNSLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNSLEdBQUcsRUFBRTtnQkFDSCxDQUFDLEVBQUUsS0FBSztnQkFDUixDQUFDLEVBQUUsR0FBRzthQUNQO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTCxDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUc7WUFDZixHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakIsR0FBRyxFQUFFO2dCQUNILENBQUMsRUFBRSxLQUFLO2dCQUNSLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxDQUFDO2FBQ0w7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMLENBQUM7UUFFRixNQUFNLENBQ0osZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDdEIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9