const curry = require('ramda/src/curry.js');
const converge = require('ramda/src/converge.js');
const merge = require('ramda/src/mergeRight.js');
const identity = require('ramda/src/identity.js');
const applySpec = require('ramda/src/applySpec.js');

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
