const curry = require('@pnpm/ramda/src/curry');
const converge = require('@pnpm/ramda/src/converge');
const merge = require('@pnpm/ramda/src/mergeRight');
const identity = require('@pnpm/ramda/src/identity');
const applySpec = require('@pnpm/ramda/src/applySpec');

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature Object a -> Object b -> Object a b
 */
const mergeSpec = curry((spec, data) =>
  converge(merge, [identity, applySpec(spec)])(data)
);

module.exports = mergeSpec;
