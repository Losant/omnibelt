const { curry } = require('ramda');
const defer = require('./defer');

/**
 * A promise timeout helper. If the given promise does not resolve within the given
 * number of milliseconds, the promise is rejected.
 *
 * Similar to http://bluebirdjs.com/docs/api/timeout.html
 * or https://github.com/kriskowal/q/wiki/API-Reference#promisetimeoutms-message
 *
 * NOTE: this does NOT cancel the original promise.
 *
 * REASONING: we are trying to no longer use libraries that create their own "Promise"
 * classes with special methods (q/bluebird) - i.e., we want to treat everything like a native promise
 *
 * @signature Number -> Promise<*> -> Promise<*>
 */
const timeout = curry((ms, promise) => {
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

module.exports = timeout;
