const r = require('ramda');

/**
 * @module ramda
 */
module.exports = r.omit([
  'count',
  'flip',
  'forEach',
  'indexBy',
  'split',
  'tap',
  'toLower',
  'toString',
  'toUpper',
  'trim'
], r);
