const curry = require('ramda/src/curry.js');
const compose = require('ramda/src/compose.js');
const map = require('ramda/src/map.js');
const cond = require('ramda/src/cond.js');
const is = require('ramda/src/is.js');
const T = require('ramda/src/T.js');
const identity = require('ramda/src/identity.js');
const resolveProps = require('./resolve-props');
const allSettledP = require('./all-settled-p');

const resolveArray = async (x) => {
  return Promise.all(x)
    .catch(async (err) => {
      await allSettledP(x);
      throw err;
    });
};

/**
 * Just like a normal `map` function, but handles an asynchronous iteration function
 *
 * @func
 * @memberof module:omnibelt
 * @name mapP
 * @param {Function} xf - Asynchronous tranformation function
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
