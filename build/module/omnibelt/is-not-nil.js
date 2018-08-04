const complement = require('ramda/src/complement');
const isNil = require('ramda/src/isNil');
/**
 * Takes a value and returns true if the value is neither null nor undefined;
 * returns false if not.
 *
 * @signature * -> Boolean
 */
const isNotNil = complement(isNil);
module.exports = isNotNil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbm90LW5pbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9pcy1ub3QtbmlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXpDOzs7OztHQUtHO0FBQ0gsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIn0=