const curry = require('ramda/src/curry');
const unless = require('ramda/src/unless');
const endsWith = require('ramda/src/endsWith');
const concat = require('ramda/src/concat');
const flip = require('ramda/src/flip');
/**
 * Ensures a string / array value ends with the specified suffix. If not, the
 * suffix is appended to the value.
 *
 * @signature String|Array -> String|Array -> String|Array
 */
module.exports = curry((suffix, currentValue) => unless(endsWith(suffix), flip(concat)(suffix))(currentValue));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLWVuZHMtd2l0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9lbnN1cmUtZW5kcy13aXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXZDOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FDOUMsTUFBTSxDQUNKLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUNyQixDQUFDLFlBQVksQ0FBQyxDQUNoQixDQUFDIn0=