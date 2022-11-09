const curry = require('ramda/src/curry.js');
const when = require('ramda/src/when.js');
const either = require('ramda/src/either.js');
const isNil = require('ramda/src/isNil.js');
const complement = require('ramda/src/complement.js');
const always = require('ramda/src/always.js');

const isPopulatedString = require('./is-populated-string');

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature * a -> * b -> a|b
 */
const defaultToStrict = curry((def, val) =>
  when(
    either(isNil, complement(isPopulatedString)),
    always(def)
  )(val)
);

module.exports = defaultToStrict;
