const pipe = require('ramda/src/pipe');
const assocPath = require('ramda/src/assocPath');
const adjust = require('ramda/src/adjust');
const apply = require('ramda/src/apply');

const list = require('./list');
const ensureArray = require('./ensure-array');
const updateKeysWith = require('./update-keys-with');

/**
 * Updates the key paths for a given object according to the provided map of
 * { oldKey: newKey } where `newKey` is an array. Any keys that aren't included
 * in the map will be passed through unchanged.
 *
 * @signature { a: [String] } -> { a: * } -> { b: * }
 *
 * @example
 *   updateKeyPaths({ foo: ['params', 'bar'] }, { foo: 1 }); // => { params: { bar: 1 } }
 */
const updateKeyPaths = updateKeysWith(pipe(
  list,
  adjust(ensureArray, 0),
  apply(assocPath),
));

module.exports = updateKeyPaths;
