const map = require('ramda/src/map');
const keys = require('ramda/src/keys');

/**
 * Takes an object where the values may be promises
 * and returns an object where all those promises are resolved.
 * If any individual promise is rejected, resolveProps rejects.
 *
 * Similar to http://bluebirdjs.com/docs/api/promise.props.html
 *
 * REASONING: we are trying to no longer use libraries that create their own "Promise"
 * classes with special methods (q/bluebird) - i.e., we want to treat everything like a native promise
 *
 * @signature Object -> Promise<Object>
 */
const resolveProps = async (obj) => {
  const result = {};
  await Promise.all(map(async (key) => {
    result[key] = await obj[key];
  }, keys(obj)));
  return result;
};

module.exports = resolveProps;
