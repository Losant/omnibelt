const curry = require('ramda/src/curry');
const times = require('ramda/src/times');

const arrayEvaluator = async (func, accumulator, iterator) => {
  const next = iterator.next();
  if (next.done) { return; }
  accumulator.push(await func(next.value));
  await arrayEvaluator(func, accumulator, iterator);
};

const objectEvaluator = async (func, accumulator, iterator) => {
  const next = iterator.next();
  if (next.done) { return; }
  const key = next.value[0];
  accumulator[key] = await func(next.value);
  await objectEvaluator(func, accumulator, iterator);
};

/**
 * A promise map helper, that limits the number of items being evaluated in parallel.
 * Given an asynchronous function and an iterable or an object, this will evaluate the
 * function against each value of the iterable, in parallel, limited by the maxParallel argument.
 *
 * If the given iterable is neither iterable nor an object, it is just returned.
 *
 * Note: An iterable will always return a promise for an array. An object will return a promise
 * for an object.
 *
 * @func
 * @memberof module:omnibelt
 * @name parallelLimitMapP
 *
 * @param {Number} maxParallel - Maximum number of items to be evaluating at once
 * @param {Function} func - An async function
 * @param {Iterable} iterable - Object or iterable
 * @return {Promise} A promise that will resolve to either an array or object when iteration is done
 * @summary Number -> Function -> Iterable -> Promise<iterable>
 */
const parallelLimitMapP = curry(async (maxParallel, func, iterable) => {
  if (!iterable) { return iterable; }
  if (!maxParallel || maxParallel < 1) { maxParallel = 1; }

  let accumulator, evaluator, iterator;
  if (iterable[Symbol.iterator]) {
    accumulator = [];
    evaluator = arrayEvaluator;
    iterator = iterable[Symbol.iterator]();
  } else if (typeof(iterable) === 'object') {
    accumulator = {};
    evaluator = objectEvaluator;
    iterator = Object.entries(iterable)[Symbol.iterator]();
  } else {
    return iterable;
  }

  const promises = times(() => {
    return evaluator(func, accumulator, iterator);
  }, maxParallel);
  await Promise.all(promises);

  return accumulator;
});

module.exports = parallelLimitMapP;
