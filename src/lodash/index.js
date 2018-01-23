import { pick } from 'ramda';
import _ from 'lodash/fp';

// TODO: Maybe grab these methods from individual packages
module.exports = pick([
  'isNull',
  'isUndefined',
  'isArrayLike',
  'castArray',
  'toString',
  'compact',
  'keyBy',
  'mapKeys',
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
  'noop',
  'flip',
], _);
