const { pick } = require('ramda');
const _ = require('lodash/fp');

// TODO: Maybe grab this methods from individual packages
module.exports = pick([
  // Type Checking
  'isNull',
  'isUndefined',
  'isArrayLike',
  'castArray',
  // Functions
  'mapKeys',
  'keyBy',
  // String
  'camelCase',
  'capitalize',
  'kebabCase',
  'lowerFirst',
  'pad',
  'padEnd',
  'padStart',
  'padChars',
  'padCharsEnd',
  'padCharsStart',
  'parseInt',
  'snakeCase',
  'startCase',
  'trimEnd',
  'trimStart',
  'upperFirst',
  'words',
  'unescape',
  'escapeRegExp',
  // Other
  'debounce',
  'throttle',
  'noop',
], _);
