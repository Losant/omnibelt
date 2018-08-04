var useWith = require('ramda/src/useWith');
var identity = require('ramda/src/identity');
var pathOr = require('ramda/src/pathOr');
var split = require('ramda/src/split');
/**
 * If the given, non-null object has a value at the given dot-separated path, returns the
 * value at that path. Otherwise returns the provided default value. Path can be composed
 * of any combination of prop names and/or array indices.
 *
 * @see dotPath
 *
 * @signature a -> String -> Object<a> -> a
 *
 * @example
 *   dotPathOr('N/A', 'a.b', { a: { b: 1 } }); // => 1
 *   dotPathOr('N/A', 'invalid.key', { a: 1 }); // => 'N/A'
 *   dotPathOr('N/A', 'a.b.0', { a: { b: [1, 2, 3] } }); // => 1
 *   dotPathOr('N/A', 'a.b.0', { a: { b: 'not an arrray' } }); // => 'N/A'
 */
var dotPathOr = useWith(pathOr, [identity, split('.'), identity]);
module.exports = dotPathOr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90LXBhdGgtb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZG90LXBhdGgtb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBRXBFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIn0=