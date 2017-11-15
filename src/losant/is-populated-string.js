const { is, isEmpty } = require('ramda');

// isPopulatedString :: String -> Boolean
const isPopulatedString = (x) => {
  if (!is(String)(x)) { return false; }
  return !isEmpty(x);
};

module.exports = isPopulatedString;
