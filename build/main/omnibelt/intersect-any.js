var __ = require('ramda/src/__');
var filter = require('ramda/src/filter');
var gt = require('ramda/src/gt');
var compose = require('ramda/src/compose');
var unnest = require('ramda/src/unnest');
var keys = require('ramda/src/keys');
var map = require('ramda/src/map');
var unless = require('ramda/src/unless');
var equals = require('ramda/src/equals');
var count = require('./count');
var gt1 = gt(__, 1);
// :: String -> String | Number
var parseIntIfPossible = unless(compose(equals(NaN), parseInt), parseInt);
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
var intersectAny = compose(map(parseIntIfPossible), keys, filter(gt1), count, unnest);
module.exports = intersectAny;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0LWFueS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9pbnRlcnNlY3QtYW55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbkMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTNDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVqQyxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXRCLCtCQUErQjtBQUMvQixJQUFNLGtCQUFrQixHQUN0QixNQUFNLENBQ0osT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsRUFDOUIsUUFBUSxDQUNULENBQUM7QUFFSjs7Ozs7Ozs7OztHQVVHO0FBQ0gsSUFBTSxZQUFZLEdBQ2hCLE9BQU8sQ0FDTCxHQUFHLENBQUMsa0JBQWtCLENBQUMsRUFDdkIsSUFBSSxFQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDWCxLQUFLLEVBQ0wsTUFBTSxDQUNQLENBQUM7QUFFSixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyJ9