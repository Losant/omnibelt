const curry = require('ramda/src/curry');
const converge = require('ramda/src/converge');
const merge = require('ramda/src/mergeRight');
const identity = require('ramda/src/identity');
const applySpec = require('ramda/src/applySpec');

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
