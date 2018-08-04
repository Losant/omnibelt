const map = require('ramda/src/map');
const addIndex = require('ramda/src/addIndex');
/**
 * `R.map` with the index added.
 *
 * @func
 * @memberof module:omnibelt
 * @name mapIndexed
 * @param {Function} xf - tranformation function, arity 2
 * @param {Array|Object} data - Data source to iterate over
 * @return {Array|Object} Transformed values inside the `data` original structure
 * @summary ((Any a, Number) -> b) -> Array< a > -> Array< b >
 * @see `R.map`, `R.addIndex`, `R.mapObjIndexed`
 *
 * @example
 * map(
 *   (value, index) => `${value}-{index}`,
 *   ['a', 'b']
 * );
 * // ['a-0', 'b-1']
 */
const mapIndexed = addIndex(map);
module.exports = mapIndexed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWluZGV4ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvbWFwLWluZGV4ZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRS9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFakMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMifQ==