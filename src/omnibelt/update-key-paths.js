const pipe = require('@pnpm/ramda/src/pipe');
const assocPath = require('@pnpm/ramda/src/assocPath');
const adjust = require('@pnpm/ramda/src/adjust');
const apply = require('@pnpm/ramda/src/apply');

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
  adjust(0, ensureArray),
  apply(assocPath)
));

module.exports = updateKeyPaths;
