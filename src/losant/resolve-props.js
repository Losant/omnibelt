const { map, keys } = require('ramda');

/**
 * Takes an object where the values may be promises
 * and returns an object where all those promises are resolved.
 * If any individual promise is rejected, resolveProps rejects.
 *
 * Similar to http://bluebirdjs.com/docs/api/promise.props.html
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
