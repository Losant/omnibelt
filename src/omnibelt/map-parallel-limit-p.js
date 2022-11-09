const curry = require('ramda/src/curry.js');
const times = require('ramda/src/times.js');
const allSettledP = require('./all-settled-p');

const objAccumulator = (accumulator, transformed, original) => { accumulator[original[0]] = transformed; };
const aryAccumulator = (accumulator, transformed) => { accumulator.push(transformed); };

const makeEvaluator = (func, iterator, accFunc, accumulator, opts) => {
  const evaluator = async () => {
    if (opts.stop) { return; }
    const next = iterator.next();
    if (next.done) { return; }
    accFunc(accumulator, await func(next.value), next.value);
    await evaluator();
  };
  return evaluator;
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
 * @name mapParallelLimitP
 *
 * @param {Number} maxParallel - Maximum number of items to be evaluating at once
 * @param {Function} func - An async function
 * @param {Iterable} iterable - Object or iterable
 * @return {Promise} A promise that will resolve to either an array or object when iteration is done
 * @summary Number -> Function -> Iterable -> Promise<iterable>
 */

const mapParallelLimitP = curry(async (maxParallel, func, iterable) => {
  if (!iterable) { return iterable; }
  if (!maxParallel || maxParallel < 1) { maxParallel = 1; }

  let accumulator, evaluator;
  const opts = { stop: false };
  if (iterable[Symbol.iterator]) {
    accumulator = [];
    evaluator = makeEvaluator(
      func, iterable[Symbol.iterator](), aryAccumulator, accumulator, opts);
  } else if (typeof(iterable) === 'object') {
    accumulator = {};
    evaluator = makeEvaluator(
      func, Object.entries(iterable)[Symbol.iterator](), objAccumulator, accumulator, opts);
  } else {
    return iterable;
  }

  const promises = times(evaluator, maxParallel);
  await Promise.all(promises)
    .catch(async (err) => {
      opts.stop = true;
      await allSettledP(promises);
      throw err;
    });

  return accumulator;
});

module.exports = mapParallelLimitP;
