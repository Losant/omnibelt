const { curry } = require('ramda');

const evaluator = async (func, iterator) => {
  const next = iterator.next();
  if (next.done) { return; }
  await func(next.value);
  return evaluator(func, iterator);
};

/**
 * A promise for each helper (serial). Given an asynchronous function
 * and an iterable or an object, this will evaluate the function against
 * each value of the iterable, serially.
 *
 * @func
 * @memberof module:omnibelt
 * @name serialForEachP

 * @param {Function} func - An async function
 * @param {Iterable} iterable - Object or iterable
 * @return {Promise} A promise that will resolve to undefined when iteration is done
 * @summary Function -> Iterable -> Promise<iterable>
 */
const serialForEachP = curry(async (func, iterable) => {
  if (!iterable) { return iterable; }

  const iterator = iterable[Symbol.iterator] ?
    iterable[Symbol.iterator]() :
    Object.entries(iterable)[Symbol.iterator]();
  await evaluator(func, iterator);
  return iterable;
});

module.exports = serialForEachP;
