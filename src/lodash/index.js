const { pick } = require('ramda');
const _ = require('lodash/fp');

// TODO: Maybe grab these methods from individual packages
// NOTES: when deconstructing, parseInt conflicts poorly with native parseInt
// so for now, just use native parseInt, or toInteger

/**
 * @module lodash
 */
module.exports = pick([
  /**
   * @func
   * @memberof module:lodash
   * @name camelCase
   * @see {@link https://gist.github.com/jfmengels/6b973b69c491375117dc#_camelcasestring|_.camelCase}
   */
  'camelCase',

  /**
   * @func
   * @memberof module:lodash
   * @name capitalize
   * @see {@link https://gist.github.com/jfmengels/6b973b69c491375117dc#_https://gist.github.com/jfmengels/6b973b69c491375117dc#_capitalizestring|_.capitalize}
   */
  'capitalize',

  /**
   * @func
   * @memberof module:lodash
   * @name castArray
   * @see {@link https://gist.github.com/jfmengels/6b973b69c491375117dc#_https://gist.github.com/jfmengels/6b973b69c491375117dc#_castarrayvalue|_.castArray}
   */
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
