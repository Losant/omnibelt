const {
  curry, reduce, assoc, keys,
} = require('ramda');

// TODO: TESTS
// TODO: DOCS

// renameKeys :: {a: b} => {a: *} -> {b: *}
const renameKeys = curry(
  (keysMap, obj) =>
    reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj))
);
module.exports = renameKeys;
