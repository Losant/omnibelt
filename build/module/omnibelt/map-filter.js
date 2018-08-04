const { reduce, curry } = require('ramda');
/**
 * Maps an array by the given transform, but only the transformed values that pass the given
 * predicate are included in the resulting array.
 *
 * @signature Predicate -> xf -> [*] -> [*]
 */
const mapFilter = curry((predicate, transform, data) => {
    return reduce((accumulator, value) => {
        value = transform(value);
        if (predicate(value)) {
            accumulator.push(value);
        }
        return accumulator;
    }, [], data);
});
module.exports = mapFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9tYXAtZmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNDOzs7OztHQUtHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNyRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNuQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUFFO1FBQ2xELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIn0=