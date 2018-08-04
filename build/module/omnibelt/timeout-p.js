const { curry } = require('ramda');
const defer = require('./defer');
/**
 * A promise timeout helper. If the given promise does not resolve within the given
 * number of milliseconds, the promise is rejected. Similar to [this](http://bluebirdjs.com/docs/api/timeout.html)
 * or [this](https://github.com/kriskowal/q/wiki/API-Reference#promisetimeoutms-message).
 * NOTE: this does NOT cancel the original promise.
 *
 * @func
 * @memberof module:omnibelt
 * @name timeoutP
 * @param {Number} ms - Number of miliseconds before timing out the promise
 * @param {Promise} promise - An in-flight promise
 * @return {Any|Error} The return value of the promise or rejection
 * @summary Number -> Promise< * > -> Promise< * >
 *
 * @example
 * timeoutP(1000, Promise.resolve('hi')).then(identity); // => 'hi'
 * timeoutP(1000, async (foo) => {
 *   await sleep(1200);
 *   return foo;
 * }).catch(identity); // => Error<{ code: ETIMEDOUT, name: 'Error', message: '...' }>
 */
const timeoutP = curry((ms, promise) => {
    const deferred = defer();
    const timeoutId = setTimeout(() => {
        const error = new Error(`Promise timed out after ${ms} ms`);
        error.code = 'ETIMEDOUT';
        error.promise = promise;
        deferred.reject(error);
    }, ms);
    promise
        .then((value) => {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, (err) => {
        clearTimeout(timeoutId);
        deferred.reject(err);
    });
    return deferred.promise;
});
module.exports = timeoutP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZW91dC1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3RpbWVvdXQtcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDckMsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFFekIsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RCxLQUFLLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUN6QixLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN4QixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU87U0FDSixJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNkLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ1QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFTCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyJ9