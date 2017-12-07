const { pick } = require('ramda');
const _ = require('lodash/fp');

// TODO: Maybe grab these methods from individual packages
module.exports = pick([
  // Type Checking
  'isNull',
  'isUndefined',
  'isArrayLike',
  'castArray',
  // Type Coercion
  'toString',
  // Functions
  'mapKeys',
  'keyBy',
  // Collections
  'compact',
  // String
  'parseInt',
  'camelCase',
  'kebabCase',
  'snakeCase',
  'startCase',
  'capitalize',
  'lowerFirst',
  'upperFirst',
  'toLower',
  'toUpper',
  'pad',
  'padEnd',
  'padStart',
  'padChars',
  'padCharsEnd',
  'padCharsStart',
  'trim',
  'trimEnd',
  'trimStart',
  'split',
  'words',
  'escape',
  'unescape',
  'escapeRegExp',
  // Other
  'debounce',
  'throttle',
  'noop',
], _);
