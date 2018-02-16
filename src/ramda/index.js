const r = require('ramda');

module.exports = r.omit([
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
