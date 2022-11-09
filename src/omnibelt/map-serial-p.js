const curry = require('ramda/src/curry.js');

const objAccumulator = (accumulator, transformed, original) => { accumulator[original[0]] = transformed; };
const aryAccumulator = (accumulator, transformed) => { accumulator.push(transformed); };

const makeEvaluator = (func, iterator, accFunc, accumulator) => {
  const evaluator = async () => {
    const next = iterator.next();
    if (next.done) { return; }
    accFunc(accumulator, await func(next.value), next.value);
    await evaluator();
  };
  return evaluator;
};

/**
 * A promise map helper, runs an async function on each item one after the other.
 * Given an asynchronous function and an iterable or an object, this will evaluate the
 * function against each value of the iterable.
 *
 * If the given iterable is neither iterable nor an object, it is just returned.
 *
 * Note: An iterable will always return a promise for an array. An object will return a promise
 * for an object.
 *
 * @func
 * @memberof module:omnibelt
 * @name mapSerialP
 *
 * @param {Function} func - An async function
 * @param {Iterable} iterable - Object or iterable
 * @return {Promise} A promise that will resolve to either an array or object when iteration is done
 * @summary Function -> Iterable -> Promise<iterable>
 */
const mapSerialP = curry(async (func, iterable) => {
  if (!iterable) { return iterable; }

  let accumulator, evaluator;
  if (iterable[Symbol.iterator]) {
    accumulator = [];
    evaluator = makeEvaluator(
      func, iterable[Symbol.iterator](), aryAccumulator, accumulator);
  } else if (typeof(iterable) === 'object') {
    accumulator = {};
    evaluator = makeEvaluator(
      func, Object.entries(iterable)[Symbol.iterator](), objAccumulator, accumulator);
  } else {
    return iterable;
  }

  await evaluator();

  return accumulator;
});

module.exports = mapSerialP;
