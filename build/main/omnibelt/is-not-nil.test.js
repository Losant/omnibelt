var _a = require('ramda'), map = _a.map, apply = _a.apply;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var isNotNil = require('./is-not-nil');
var cases = [
    [null, false],
    [undefined, false],
    [0, true],
    [true, true],
    [false, true],
    ['', true],
    ['foo', true]
];
map(apply(testHarnessUnary(isNotNil)))(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbm90LW5pbC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2lzLW5vdC1uaWwudGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBTSxJQUFBLHFCQUFpQyxFQUEvQixZQUFHLEVBQUUsZ0JBQUssQ0FBc0I7QUFFaEMsSUFBQSwrREFBZ0IsQ0FBaUM7QUFDekQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXpDLElBQU0sS0FBSyxHQUFHO0lBQ1osQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQ2IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNULENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNaLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNWLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztDQUNkLENBQUM7QUFFRixHQUFHLENBQ0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ2xDLENBQUMsS0FBSyxDQUFDLENBQUMifQ==