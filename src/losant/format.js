const { curryN } = require('ramda');
const stringFormat = require('string-format');

// format :: String -> String
const format = curryN(2, stringFormat);

module.exports = format;
