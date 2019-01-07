const mapP = require('./map-p');

const onSettledSuccess = (value) => ({ state: 'fulfilled', value });
const onSettledReject = (reason) => ({ state: 'rejected', reason });
const onSettledP = (promise) => promise.then(onSettledSuccess, onSettledReject);

/**
 * A 'promise all' that does not reject when promises are rejected. Instead returns an array of
 * results. Each result will be an object. The object will have the following form for a
 * successfully settled promise:
 * { state: 'fulfilled', value: <the result of the promise> }
 * A rejected result will look like:
 * { state: 'rejected', reason: <the rejection reason/error> }
 *
 * Similar to [this](https://github.com/kriskowal/q/wiki/API-Reference#promiseallsettled).
 *
 * @func
 * @memberof module:omnibelt
 * @name allSettledP

 * @param {Array} promises - An array of promises
 * @return {Promise} A promise that will resolve to an array of settled/rejected results
 * @summary [Promise] -> Promise<[Object]>
 *
 * @example
 * await allSettledP([Promise.resolve('good'), Promise.reject('bad')]);
 * // => [{ state: 'fulfilled', value: 'good' }, { state: 'rejected', reason: 'bad' }]
 */
const allSettledP = mapP(onSettledP);

module.exports = allSettledP;
