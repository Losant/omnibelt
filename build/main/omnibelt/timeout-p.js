var curry = require('ramda').curry;
var defer = require('./defer');
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
var timeoutP = curry(function (ms, promise) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        var error = new Error("Promise timed out after " + ms + " ms");
        error.code = 'ETIMEDOUT';
        error.promise = promise;
        deferred.reject(error);
    }, ms);
    promise
        .then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (err) {
        clearTimeout(timeoutId);
        deferred.reject(err);
    });
    return deferred.promise;
});
module.exports = timeoutP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZW91dC1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3RpbWVvdXQtcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxJQUFBLDhCQUFLLENBQXNCO0FBQ25DLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBQyxFQUFFLEVBQUUsT0FBTztJQUNqQyxJQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUV6QixJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsNkJBQTJCLEVBQUUsUUFBSyxDQUFDLENBQUM7UUFDNUQsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7UUFDekIsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxPQUFPO1NBQ0osSUFBSSxDQUFDLFVBQUMsS0FBSztRQUNWLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsRUFBRSxVQUFDLEdBQUc7UUFDTCxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVMLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIn0=