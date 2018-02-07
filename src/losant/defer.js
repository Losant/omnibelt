/**
 * Returns a deferred. No longer in the Promise spec
 * (or Bluebird) - but extremely useful.
 * http://bluebirdjs.com/docs/api/deferred-migration.html
 * https://github.com/kriskowal/q/wiki/API-Reference#qdefer
 *
 * @signature -> Object
 */
const defer = () => {
  let resolve, reject;
  const promise = new Promise((f, r) => {
    resolve = f;
    reject = r;
  });
  return { resolve, reject, promise };
};

module.exports = defer;
