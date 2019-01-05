const mapP = require('./map-p');

const onSettledSuccess = (value) => { return { state: 'fulfilled', value }; };
const onSettledReject = (reason) => { return { state: 'rejected', reason }; };
const oneSettledP = (promise) => { return promise.then(onSettledSuccess, onSettledReject); };

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
 */
const allSettledP = mapP(oneSettledP);

module.exports = allSettledP;
