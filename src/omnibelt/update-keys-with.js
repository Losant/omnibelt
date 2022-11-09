const curry = require('ramda/src/curry.js');
const prop = require('ramda/src/prop.js');
const propOr = require('ramda/src/propOr.js');
const reduce = require('ramda/src/reduce.js');
const keys = require('ramda/src/keys.js');

/**
 * Updates the keys for an object using the provided function and a map of
 * { oldKey: newKey }. The type of newKey will depend on which function is
 * passed as the first argument (i.e. if you use `assoc` it will expect a
 * string, if you use `assocPath` it will expect an array, etc.)
 *
 * @signature (String | [String], *, { a: * } -> { b: * }) -> { a: String | [String] } -> { b: * }
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
