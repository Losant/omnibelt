const curry = require('ramda/src/curry');
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
const thunkify = curry((fn, value) => () => fn(value));
module.exports = thunkify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bmtpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvdGh1bmtpZnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBRXZELE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIn0=