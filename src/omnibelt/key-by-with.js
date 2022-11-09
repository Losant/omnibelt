const curry = require('@pnpm/ramda/src/curry');
const reduce = require('@pnpm/ramda/src/reduce');
const assoc = require('@pnpm/ramda/src/assoc');

/**
 * A variant of `keyBy` / `indexBy` that accepts getter functions for both the
 * key and the value.
 *
 * @signature (Object -> key) -> (Object -> value) -> Array<Object> -> Object<key, value>
 *
 * @example
 *     const list = [{ key: 'foo', value: 'bar' }, { key: 'a', value: 1 }];
 *     const result = keyByWith(prop('key'), prop('value'), list); // => { foo: 'bar', a: 1 }
 */
const keyByWith = curry((getKey, getValue, list) => {
  const reducer = (acc, obj) => {
    const key = getKey(obj);
    const value = getValue(obj);

    return assoc(key, value, acc);
  };

  return reduce(reducer, {}, list);
});

module.exports = keyByWith;
