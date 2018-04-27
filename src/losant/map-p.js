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
 * @memberof module:losant
 * @name mapP
 * @param {Function} xf - Asyncronous tranformation function
 * @param {Array|Object} data - Data source to iterate over
 * @return {Array|Object} Transformed values inside the `data` original structure
 * @summary (a -> Promise< b >) -> Array|Object b< a > -> Promise< b< a > >;
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
const mapP = curry(
  (xf, data) => compose(
    cond([
      [is(Array), resolveArray],
      [is(Object), resolveProps],
      [T, identity]
    ]),
    map(xf)
  )(data)
);

module.exports = mapP;
