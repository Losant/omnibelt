const flip = require('ramda/src/flip');
const contains = require('ramda/src/contains');
/**
 * Predicate that checks to see if a value exists in an array.
 *
 * @signature Array<* a> -> a -> Boolean
 *
 * @example
 * equalsAny([1, 2, 3], 2); // => true
 * equalsAny(['a', 'b', 'c'], 2); // => false
 */
const equalsAny = flip(contains);
module.exports = equalsAny;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWxzLWFueS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9lcXVhbHMtYW55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRS9DOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIn0=