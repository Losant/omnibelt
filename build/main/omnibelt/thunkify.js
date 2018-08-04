var curry = require('ramda/src/curry');
/**
 * Takes a function and returns a function that takes any number of arguments
 * and returns a thunk that calls the original function with those arguments.
 *
 * @signature Function -> Function -> Function -> *
 *
 * @example
 *   const logger = thunkify(console.log);
 *   const logFoo = logger('foo');
 *   logFoo(); // => 'foo'
 */
var thunkify = curry(function (fn, value) { return function () { return fn(value); }; });
module.exports = thunkify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bmtpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvdGh1bmtpZnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7Ozs7R0FVRztBQUNILElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFDLEVBQUUsRUFBRSxLQUFLLElBQUssT0FBQSxjQUFNLE9BQUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFULENBQVMsRUFBZixDQUFlLENBQUMsQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyJ9