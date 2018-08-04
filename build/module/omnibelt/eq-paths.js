const pipe = require('ramda/src/pipe');
const curry = require('ramda/src/curry');
const path = require('ramda/src/path');
const map = require('ramda/src/map');
const apply = require('ramda/src/apply');
const equals = require('ramda/src/equals');
/**
 * Takes a path to check and two objects and checks if the value at that path
 * is equal for both objects.
 *
 * @signature Array<String> -> Object -> Object -> Boolean
 */
const eqPaths = curry((pathToCheck, a, b) => pipe(map(path(pathToCheck)), apply(equals))([a, b]));
module.exports = eqPaths;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXEtcGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZXEtcGF0aHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTNDOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUMxQyxJQUFJLENBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUN0QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQ2QsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNWLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyJ9