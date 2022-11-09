const curry = require('ramda/src/curry.js');
const concat = require('ramda/src/concat.js');
const uniq = require('ramda/src/uniq.js');
const keys = require('ramda/src/keys.js');
const has = require('ramda/src/has.js');
const all = require('ramda/src/all.js');
const is = require('ramda/src/is.js');

/**
 * @signature * -> * -> Boolean
 *
 * @example
 *   equalsShallow({ a: 1 }, { a: 1 }); // true
 *   equalsShallow({ a: 1 }, { a: 2 }); // false
 *   equalsShallow({ a: { b: 1 } }, { a: { b: 1 } }); // false
 */
const equalsShallow = curry((a, b) => {
  // Strict equality check.
  if (Object.is(a, b)) {
    return true;
  }

  if (!is(Object, a) || !is(Object, b)) {
    return false;
  }

  const aKeys = keys(a);
  const bKeys = keys(b);

  // If the objects have different numbers of keys then we know they're not equivalent.
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  // Check if either object has a key that the other doesn't
  // OR if any key's value is different between objects
  const hasMatchingKeysAndValues = all(
    (key) => all(has(key), [a, b]) && Object.is(a[key], b[key]),
    uniq(concat(aKeys, bKeys))
  );

  if (!hasMatchingKeysAndValues) {
    return false;
  }

  return true;
});

module.exports = equalsShallow;
