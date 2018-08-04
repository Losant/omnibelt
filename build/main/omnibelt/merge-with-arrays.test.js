var mergeWithArrays = require('./merge-with-arrays');
describe('mergeWithArrays', function () {
    it('merges arrays instead of overriding', function () {
        var x = {
            foo: [1, 2, 3],
            bar: {
                a: 'a',
                c: 1
            },
            a: 3
        };
        var y = {
            foo: [4],
            bar: {
                a: 'new',
                b: 'b'
            },
            a: 4
        };
        var expected = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2Utd2l0aC1hcnJheXMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9tZXJnZS13aXRoLWFycmF5cy50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRXZELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUUxQixFQUFFLENBQUMscUNBQXFDLEVBQUU7UUFDeEMsSUFBTSxDQUFDLEdBQUc7WUFDUixHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNkLEdBQUcsRUFBRTtnQkFDSCxDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsQ0FBQzthQUNMO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTCxDQUFDO1FBQ0YsSUFBTSxDQUFDLEdBQUc7WUFDUixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDUixHQUFHLEVBQUU7Z0JBQ0gsQ0FBQyxFQUFFLEtBQUs7Z0JBQ1IsQ0FBQyxFQUFFLEdBQUc7YUFDUDtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQztRQUNGLElBQU0sUUFBUSxHQUFHO1lBQ2YsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsRUFBRTtnQkFDSCxDQUFDLEVBQUUsS0FBSztnQkFDUixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsQ0FBQzthQUNMO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTCxDQUFDO1FBRUYsTUFBTSxDQUNKLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3RCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMifQ==