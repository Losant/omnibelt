var curry = require('ramda/src/curry');
var unless = require('ramda/src/unless');
var endsWith = require('ramda/src/endsWith');
var concat = require('ramda/src/concat');
var flip = require('ramda/src/flip');
/**
 * Ensures a string / array value ends with the specified suffix. If not, the
 * suffix is appended to the value.
 *
 * @signature String|Array -> String|Array -> String|Array
 */
module.exports = curry(function (suffix, currentValue) {
    return unless(endsWith(suffix), flip(concat)(suffix))(currentValue);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLWVuZHMtd2l0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9lbnN1cmUtZW5kcy13aXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQy9DLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXZDOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBQyxNQUFNLEVBQUUsWUFBWTtJQUMxQyxPQUFBLE1BQU0sQ0FDSixRQUFRLENBQUMsTUFBTSxDQUFDLEVBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FDckIsQ0FBQyxZQUFZLENBQUM7QUFIZixDQUdlLENBQ2hCLENBQUMifQ==