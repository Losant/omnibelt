const curry = require('ramda/src/curry');
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
 * @param {Number} ms - Number of milliseconds before timing out the promise
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

  // creating the error here in order to
  // capture a more reasonable stack trace
  const error = new Error();

  const timeoutId = setTimeout(() => {
    error.message = `Promise timed out after ${ms} ms`;
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
