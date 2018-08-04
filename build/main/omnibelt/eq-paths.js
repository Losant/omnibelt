var pipe = require('ramda/src/pipe');
var curry = require('ramda/src/curry');
var path = require('ramda/src/path');
var map = require('ramda/src/map');
var apply = require('ramda/src/apply');
var equals = require('ramda/src/equals');
/**
 * Takes a path to check and two objects and checks if the value at that path
 * is equal for both objects.
 *
 * @signature Array<String> -> Object -> Object -> Boolean
 */
var eqPaths = curry(function (pathToCheck, a, b) {
    return pipe(map(path(pathToCheck)), apply(equals))([a, b]);
});
module.exports = eqPaths;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXEtcGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZXEtcGF0aHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTNDOzs7OztHQUtHO0FBQ0gsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE9BQUEsSUFBSSxDQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDdEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUNkLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFIVCxDQUdTLENBQ1YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIn0=