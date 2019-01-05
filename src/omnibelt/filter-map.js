const curry = require('ramda/src/curry');
const reduce = require('ramda/src/reduce');

/**
 * Maps an array by the given transform, but only values that pass the given given predicate
 * are transformed and included in the resulting array.
 *
 * @signature Predicate -> xf -> [*] -> [*]
 */
const filterMap = curry((predicate, transform, data) => {
  return reduce((accumulator, value) => {
    if (predicate(value)) {
      accumulator.push(transform(value));
    }
    return accumulator;
  }, [], data);
});

module.exports = filterMap;
