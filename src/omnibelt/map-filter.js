const curry = require('@pnpm/ramda/src/curry');
const reduce = require('@pnpm/ramda/src/reduce');

/**
 * Maps an array by the given transform, but only the transformed values that pass the given
 * predicate are included in the resulting array.
 *
 * @signature Predicate -> xf -> [*] -> [*]
 */
const mapFilter = curry((predicate, transform, data) => {
  return reduce((accumulator, value) => {
    value = transform(value);
    if (predicate(value)) { accumulator.push(value); }
    return accumulator;
  }, [], data);
});

module.exports = mapFilter;
