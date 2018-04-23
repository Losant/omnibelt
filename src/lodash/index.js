const { pick } = require('ramda');
const _ = require('lodash/fp');

// TODO: Maybe grab these methods from individual packages
// NOTES: when deconstructing, parseInt conflicts poorly with native parseInt
// so for now, just use native parseInt, or toInteger

/**
 * @module lodash
 */
module.exports = pick([
  'camelCase',
  'capitalize',
  'castArray',
  'compact',
  'escape',
  'escapeRegExp',
  'flip',
  'forEach',
  'isArrayLike',
  'isNull',
  'isUndefined',
  'kebabCase',
  'keyBy',
  'lowerFirst',
  'mapKeys',
  'noop',
  'pad',
  'padChars',
  'padCharsEnd',
  'padCharsStart',
  'padEnd',
  'padStart',
  'snakeCase',
  'split',
  'startCase',
  'toInteger',
  'toLower',
  'toNumber',
  'toPlainObject',
  'toString',
  'toUpper',
  'trim',
  'trimEnd',
  'trimStart',
  'unescape',
  'upperFirst',
  'words'
], _);
