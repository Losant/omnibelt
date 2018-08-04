var _a = require('ramda'), map = _a.map, apply = _a.apply;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var stringToBoolean = require('./string-to-boolean');
var cases = [
    ['true', true],
    ['t', true],
    ['yes', true],
    ['y', true],
    ['True', true],
    ['TRUE', true],
    ['  true  ', true],
    ['false', false],
    ['f', false],
    ['no', false],
    ['n', false],
    ['lskdjfldskj', false],
    ['', false],
    ['sdlkfj_true_lsdkjf', false],
    [null, false],
    [undefined, false]
];
map(apply(testHarnessUnary(stringToBoolean)))(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXRvLWJvb2xlYW4udGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9zdHJpbmctdG8tYm9vbGVhbi50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFNLElBQUEscUJBRWMsRUFEbEIsWUFBRyxFQUFFLGdCQUFLLENBQ1M7QUFFYixJQUFBLCtEQUFnQixDQUFpQztBQUN6RCxJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUV2RCxJQUFNLEtBQUssR0FBRztJQUNaLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUNkLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztJQUNYLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztJQUNiLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztJQUNYLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUNkLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUNkLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztJQUNsQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQ2IsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO0lBQ1osQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztJQUNYLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUNiLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztDQUNuQixDQUFDO0FBRUYsR0FBRyxDQUNELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUN6QyxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=