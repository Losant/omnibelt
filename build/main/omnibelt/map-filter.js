var _a = require('ramda'), reduce = _a.reduce, curry = _a.curry;
/**
 * Maps an array by the given transform, but only the transformed values that pass the given
 * predicate are included in the resulting array.
 *
 * @signature Predicate -> xf -> [*] -> [*]
 */
var mapFilter = curry(function (predicate, transform, data) {
    return reduce(function (accumulator, value) {
        value = transform(value);
        if (predicate(value)) {
            accumulator.push(value);
        }
        return accumulator;
    }, [], data);
});
module.exports = mapFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9tYXAtZmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFNLElBQUEscUJBQW9DLEVBQWxDLGtCQUFNLEVBQUUsZ0JBQUssQ0FBc0I7QUFFM0M7Ozs7O0dBS0c7QUFDSCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUk7SUFDakQsT0FBTyxNQUFNLENBQUMsVUFBQyxXQUFXLEVBQUUsS0FBSztRQUMvQixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUFFO1FBQ2xELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIn0=