var curry = require('ramda/src/curry');
/**
 * A safe version of `try/catch` that returns an [error, result] tuple instead
 * of throwing an error.
 *
 * @signature Function -> Array<*> -> Array<?Error, *>
 *
 * @example
 *   const [error, result] = tryCatchSafe(someFnThatMightThrow, [arg1, arg2]);
 */
var tryCatchSafe = curry(function (tryFn, args) {
    try {
        var result = tryFn.apply(void 0, args);
        return [null, result];
    }
    catch (error) {
        return [error, null];
    }
});
module.exports = tryCatchSafe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5LWNhdGNoLXNhZmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvdHJ5LWNhdGNoLXNhZmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7O0dBUUc7QUFDSCxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsVUFBQyxLQUFLLEVBQUUsSUFBSTtJQUNyQyxJQUFJO1FBQ0YsSUFBTSxNQUFNLEdBQUcsS0FBSyxlQUFJLElBQUksQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDdkI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDdEI7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDIn0=