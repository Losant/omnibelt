const { assoc } = require('ramda');

const updateKeysWith = require('./update-keys-with');

// TODO: TESTS
// TODO: DOCS

/**
 * Updates the key names for a given object according to the provided map of
 * { oldKey: newKey } where `newKey` is a string. Any keys that aren't included
 * in the map will be passed through unchanged.
 *
 * @typedef {String} KeyPath
 * @signature { a: KeyPath } -> { a: * } -> { b: * }
 */
const renameKeys = updateKeysWith(assoc);

module.exports = renameKeys;
