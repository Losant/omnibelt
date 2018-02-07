const r = require('ramda');

module.exports = r.omit([
  'flip',
  'forEach',
  'indexBy',
  'split',
  'toLower',
  'toString',
  'toUpper',
  'trim'
], r);
