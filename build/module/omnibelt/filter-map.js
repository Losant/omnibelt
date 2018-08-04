const { reduce, curry } = require('ramda');
/**
 * Maps an array by the given transform, but only values that pass the given given predicate
 * are transformed and included in the resulting array.
 *
 * @signature Predicate -> xf -> [*] -> [*]
 */
const filterMap = curry((predicate, transform, data) => {
    return reduce((accumulator, value) => {
        if (predicate(value)) {
            accumulator.push(transform(value));
        }
        return accumulator;
    }, [], data);
});
module.exports = filterMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9maWx0ZXItbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNDOzs7OztHQUtHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNyRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNuQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMifQ==