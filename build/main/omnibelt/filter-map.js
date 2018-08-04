var _a = require('ramda'), reduce = _a.reduce, curry = _a.curry;
/**
 * Maps an array by the given transform, but only values that pass the given given predicate
 * are transformed and included in the resulting array.
 *
 * @signature Predicate -> xf -> [*] -> [*]
 */
var filterMap = curry(function (predicate, transform, data) {
    return reduce(function (accumulator, value) {
        if (predicate(value)) {
            accumulator.push(transform(value));
        }
        return accumulator;
    }, [], data);
});
module.exports = filterMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9maWx0ZXItbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFNLElBQUEscUJBQW9DLEVBQWxDLGtCQUFNLEVBQUUsZ0JBQUssQ0FBc0I7QUFFM0M7Ozs7O0dBS0c7QUFDSCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUk7SUFDakQsT0FBTyxNQUFNLENBQUMsVUFBQyxXQUFXLEVBQUUsS0FBSztRQUMvQixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMifQ==