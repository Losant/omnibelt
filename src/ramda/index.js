import r from 'ramda';

module.exports = r.omit([
  'flip',
  'toString',
  'toLower',
  'toUpper',
  'trim',
  'split',
], r);
