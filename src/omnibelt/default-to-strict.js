const curry = require('ramda/src/curry');
const when = require('ramda/src/when');
const either = require('ramda/src/either');
const isNil = require('ramda/src/isNil');
const complement = require('ramda/src/complement');
const always = require('ramda/src/always');

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
