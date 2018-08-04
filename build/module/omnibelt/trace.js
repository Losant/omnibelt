/* eslint-disable no-console */
const curry = require('ramda/src/curry');
/**
 * Effectively a curried `console.log` that also returns it's input.
 *
 * @signature String -> a -> a
 *
 * @example
 *   trace('The meaning of life: ', 42);   // 42
 *
 *   pipe(
 *     identity
 *     trace('The meaning of life: ')      // 42
 *     // ...
 *   )(42)
 */
const trace = curry((tag, x) => {
    console.log(tag, x);
    return x;
});
module.exports = trace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvdHJhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQStCO0FBRS9CLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXpDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIn0=