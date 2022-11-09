const curry = require('@pnpm/ramda/src/curry');
const concat = require('@pnpm/ramda/src/concat');
const uniq = require('@pnpm/ramda/src/uniq');
const keys = require('@pnpm/ramda/src/keys');
const has = require('@pnpm/ramda/src/has');
const all = require('@pnpm/ramda/src/all');
const is = require('@pnpm/ramda/src/is');

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
