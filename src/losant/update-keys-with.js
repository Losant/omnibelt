const curry = require('ramda/src/curry');
const prop = require('ramda/src/prop');
const propOr = require('ramda/src/propOr');
const reduce = require('ramda/src/reduce');
const keys = require('ramda/src/keys');

/**
 * Updates the keys for an object using the provided function and a map of
 * { oldKey: newKey }. The type of newKey will depend on which function is
 * passed as the first argument (i.e. if you use `assoc` it will expect a
 * string, if you use `assocPath` it will expect an array, etc.)
 *
 * @typedef KeyPath = String | [String]
 * @signature (KeyPath, *, { a: * } -> { b: * }) -> { a: KeyPath } -> { b: * }
 */
const updateKeysWith = curry((fn, evolveKeysMap, obj) => {
  const reducer = (acc, key) => {
    const newKey = propOr(key, key, evolveKeysMap);
    const newValue = prop(key, obj);

    return fn(newKey, newValue, acc);
  };

  return reduce(reducer, {}, keys(obj));
});

module.exports = updateKeysWith;
