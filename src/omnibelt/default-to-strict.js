const curry = require('@pnpm/ramda/src/curry');
const when = require('@pnpm/ramda/src/when');
const either = require('@pnpm/ramda/src/either');
const isNil = require('@pnpm/ramda/src/isNil');
const complement = require('@pnpm/ramda/src/complement');
const always = require('@pnpm/ramda/src/always');

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
