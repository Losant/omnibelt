var testCases = require('../../test/utils').testCases;
var mapIndexed = require('./map-indexed');
testCases(mapIndexed, [
    [
        [function (value, index) { return value + "-" + index; }, ['a', 'b']],
        ['a-0', 'b-1']
    ],
    // Used to demonstrate that this doesn't do what you might expect for objects.
    // See: `R.mapObjIndexed`.
    [
        [function (value, index) { return value + "-" + index; }, { foo: 'a', bar: 'b' }],
        { foo: 'a-0', bar: 'b-1' }
    ]
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWluZGV4ZWQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9tYXAtaW5kZXhlZC50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLElBQUEsaURBQVMsQ0FBaUM7QUFDbEQsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTVDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7SUFDcEI7UUFDRSxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUssSUFBSyxPQUFHLEtBQUssU0FBSSxLQUFPLEVBQW5CLENBQW1CLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO0tBQ2Y7SUFDRCw4RUFBOEU7SUFDOUUsMEJBQTBCO0lBQzFCO1FBQ0UsQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssT0FBRyxLQUFLLFNBQUksS0FBTyxFQUFuQixDQUFtQixFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDL0QsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7S0FDM0I7Q0FDRixDQUFDLENBQUMifQ==