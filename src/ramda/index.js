const r = require('ramda');

module.exports = r.omit([
  'flip',
  'indexBy',
  'split',
  'toLower',
  'toString',
  'toUpper',
  'trim'
], r);
