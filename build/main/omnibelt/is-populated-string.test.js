var _a = require('ramda'), map = _a.map, apply = _a.apply;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var isPopulatedString = require('./is-populated-string');
var cases = [
    ['foo', true],
    ['   ', true],
    ['', false],
    [5, false],
    [false, false],
    [{ foo: 'foo' }, false],
    [['foo'], false]
];
map(apply(testHarnessUnary(isPopulatedString)))(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtcG9wdWxhdGVkLXN0cmluZy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2lzLXBvcHVsYXRlZC1zdHJpbmcudGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBTSxJQUFBLHFCQUFpQyxFQUEvQixZQUFHLEVBQUUsZ0JBQUssQ0FBc0I7QUFFaEMsSUFBQSwrREFBZ0IsQ0FBaUM7QUFDekQsSUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUUzRCxJQUFNLEtBQUssR0FBRztJQUNaLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztJQUNiLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztJQUNYLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUNWLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztJQUNkLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBQ3ZCLENBQUMsQ0FBRSxLQUFLLENBQUUsRUFBRSxLQUFLLENBQUM7Q0FDbkIsQ0FBQztBQUVGLEdBQUcsQ0FDRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUMzQyxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=