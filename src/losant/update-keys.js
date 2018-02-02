const assoc = require('ramda/src/assoc');

const updateKeysWith = require('./update-keys-with');

/**
 * Updates the key names for a given object according to the provided map of
 * { oldKey: newKey } where `newKey` is a string. Any keys that aren't included
 * in the map will be passed through unchanged.
 *
 * @typedef KeyPath = String
 * @signature { a: KeyPath } -> { a: * } -> { b: * }
 *
 * @example
 *   updateKeys({ foo: 'bar' }, { foo: 1 }); // => { bar: 1 }
 */
const updateKeys = updateKeysWith(assoc);

module.exports = updateKeys;
