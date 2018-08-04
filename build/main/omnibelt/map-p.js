var curry = require('ramda/src/curry');
var compose = require('ramda/src/compose');
var map = require('ramda/src/map');
var cond = require('ramda/src/cond');
var is = require('ramda/src/is');
var T = require('ramda/src/T');
var identity = require('ramda/src/identity');
var resolveProps = require('./resolve-props');
var resolveArray = function (x) { return Promise.all(x); };
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
var mapP = curry(function (xf, data) { return compose(cond([
    [is(Array), resolveArray],
    [is(Object), resolveProps],
    [T, identity]
]), map(xf))(data); });
module.exports = mapP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvbWFwLXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuQyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDakMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFaEQsSUFBTSxZQUFZLEdBQUcsVUFBQyxDQUFDLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQztBQUUzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0gsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUNoQixVQUFDLEVBQUUsRUFBRSxJQUFJLElBQUssT0FBQSxPQUFPLENBQ25CLElBQUksQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLFlBQVksQ0FBQztJQUN6QixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLENBQUM7SUFDMUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO0NBQ2QsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FDUixDQUFDLElBQUksQ0FBQyxFQVBPLENBT1AsQ0FDUixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMifQ==