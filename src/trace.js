/* eslint-disable no-console */

const { curry } = require('ramda');

// trace :: String -> a -> a
const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

module.exports = trace;
