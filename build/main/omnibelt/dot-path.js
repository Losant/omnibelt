var useWith = require('ramda/src/useWith');
var identity = require('ramda/src/identity');
var path = require('ramda/src/path');
var split = require('ramda/src/split');
/**
 * Gets a prop value using a dot-separated path composed of any combination of prop names
 * and/or array indices.
 *
 * @signature String -> Object -> *
 *
 * @example
 *   dotPath('a.b', { a: { b: 1 } }); // => 1
 *   dotPath('foo', { foo: 'bar' }); // => 'bar'
 *   dotPath('a.0', { a: [1, 2, 3] }); // => 1
 *   dotPath('0', ['foo', 'bar']); // => 'foo'
 *   dotPath('0.0', [[1, 2, 3]]); // => 1
 */
var dotPath = useWith(path, [split('.'), identity]);
module.exports = dotPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90LXBhdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZG90LXBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBRXRELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIn0=