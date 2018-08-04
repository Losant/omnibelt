const curry = require('ramda/src/curry');
const compose = require('ramda/src/compose');
const map = require('ramda/src/map');
const cond = require('ramda/src/cond');
const is = require('ramda/src/is');
const T = require('ramda/src/T');
const identity = require('ramda/src/identity');
const resolveProps = require('./resolve-props');
const resolveArray = (x) => Promise.all(x);
/**
 * Just like a normal `map` function, but handles an asyncronous iteration function
 *
 * @func
 * @memberof module:omnibelt
 * @name mapP
 * @param {Function} xf - Asyncronous tranformation function
 * @param {Array|Object} data - Data source to iterate over
 * @return {Array|Object} Transformed values inside the `data` original structure
 * @summary (a -> Promise< b >) -> Array|Object c< a > -> Promise< c< b > >;
 *
 * @example
 * mapP((x) => Promise.resolve(x + 1), [1, 2, 3]).then(identity); // => [2, 3, 4]
 * mapP(
 *   async (x) => {
 *     await sleep(50);
 *     return toUpper(x);
 *   },
 *   { foo: 'foo', bar: 'bar', baz: 'baz' }
 * ).then(identity);
 * // { foo: 'FOO', bar: 'BAR', baz: 'BAZ' }
 */
const mapP = curry((xf, data) => compose(cond([
    [is(Array), resolveArray],
    [is(Object), resolveProps],
    [T, identity]
]), map(xf))(data));
module.exports = mapP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvbWFwLXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDakMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFaEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUNILE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FDaEIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQ25CLElBQUksQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLFlBQVksQ0FBQztJQUN6QixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLENBQUM7SUFDMUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO0NBQ2QsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FDUixDQUFDLElBQUksQ0FBQyxDQUNSLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyJ9