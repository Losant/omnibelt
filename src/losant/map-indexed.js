const map = require('ramda/src/map');
const addIndex = require('ramda/src/addIndex');

/**
 * `R.map` with the index added.
 *
 * @func
 * @memberof module:losant
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
