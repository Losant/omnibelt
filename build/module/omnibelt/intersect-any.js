const __ = require('ramda/src/__');
const filter = require('ramda/src/filter');
const gt = require('ramda/src/gt');
const compose = require('ramda/src/compose');
const unnest = require('ramda/src/unnest');
const keys = require('ramda/src/keys');
const map = require('ramda/src/map');
const unless = require('ramda/src/unless');
const equals = require('ramda/src/equals');
const count = require('./count');
const gt1 = gt(__, 1);
// :: String -> String | Number
const parseIntIfPossible = unless(compose(equals(NaN), parseInt), parseInt);
/**
 * Finds *any* intersections between any number of lists.
 *
 * TODO: Handle strings that look like numbers. See tests.
 *
 * @signature [[String | Number a]] -> [a]
 *
 * @example
 *   intersectAny([[1, 2, 3], [5, 6, 9], [3, 9]])            // => [3, 9]
 *   intersectAny([['foo', 'bar'], ['baz'], ['bar', 'qux']]) // => ['bar']
 */
const intersectAny = compose(map(parseIntIfPossible), keys, filter(gt1), count, unnest);
module.exports = intersectAny;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0LWFueS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9pbnRlcnNlY3QtYW55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbkMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTNDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVqQyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXRCLCtCQUErQjtBQUMvQixNQUFNLGtCQUFrQixHQUN0QixNQUFNLENBQ0osT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsRUFDOUIsUUFBUSxDQUNULENBQUM7QUFFSjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxZQUFZLEdBQ2hCLE9BQU8sQ0FDTCxHQUFHLENBQUMsa0JBQWtCLENBQUMsRUFDdkIsSUFBSSxFQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDWCxLQUFLLEVBQ0wsTUFBTSxDQUNQLENBQUM7QUFFSixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyJ9