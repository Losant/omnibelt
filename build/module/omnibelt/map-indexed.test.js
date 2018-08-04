const { testCases } = require('../../test/utils');
const mapIndexed = require('./map-indexed');
testCases(mapIndexed, [
    [
        [(value, index) => `${value}-${index}`, ['a', 'b']],
        ['a-0', 'b-1']
    ],
    // Used to demonstrate that this doesn't do what you might expect for objects.
    // See: `R.mapObjIndexed`.
    [
        [(value, index) => `${value}-${index}`, { foo: 'a', bar: 'b' }],
        { foo: 'a-0', bar: 'b-1' }
    ]
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWluZGV4ZWQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9tYXAtaW5kZXhlZC50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFNUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtJQUNwQjtRQUNFLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7S0FDZjtJQUNELDhFQUE4RTtJQUM5RSwwQkFBMEI7SUFDMUI7UUFDRSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUMvRCxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtLQUMzQjtDQUNGLENBQUMsQ0FBQyJ9