const r = require('@pnpm/ramda');

/**
 * @module ramda
 */
module.exports = r.omit([
  'count',
  'flip',
  'forEach',
  'indexBy',
  'isArrayLike',
  'split',
  'tap',
  'toLower',
  'toString',
  'toUpper',
  'trim'
], r);
