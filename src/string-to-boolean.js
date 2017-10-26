const {
  pipe, toLower, trim, __, contains,
} = require('ramda');

// TODO: Explicitly check `false` cases as well and throw when neither?
// stringToBoolean :: String -> Boolean
const stringToBoolean =
  pipe(
    toLower,
    trim,
    contains(__, ['true', 't', 'yes', 'y']),
  );

module.exports = stringToBoolean;
