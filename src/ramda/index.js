const r = require('ramda');

module.exports = r.omit([
  'toString',
  'toLower',
  'toUpper',
  'trim',
  'split',
], r);
