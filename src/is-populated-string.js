const { isString, isEmpty } = require('lodash/fp');

// isPopulatedString :: String -> Boolean
const isPopulatedString = (x) => {
  if (!isString(x)) { return false; }
  return !isEmpty(x);
};

module.exports = isPopulatedString;
