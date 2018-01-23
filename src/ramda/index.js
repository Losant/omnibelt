const r = require('ramda');

module.exports = r.omit([
  'flip',
  'toString',
  'toLower',
  'toUpper',
  'trim',
  'split',
  'indexBy',
], r);
