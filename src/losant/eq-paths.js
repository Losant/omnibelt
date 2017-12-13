const { curry, path } = require('ramda');

const eqPaths = curry((pathToCheck, a, b) => {
  const getVal = path(pathToCheck);

  return getVal(a) === getVal(b);
});

module.exports = eqPaths;
