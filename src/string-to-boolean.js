const {
  pipe, toLower, trim, __, contains,
} = require('ramda');

// stringToBoolean :: String -> Boolean
const stringToBoolean =
  pipe(
    toLower,
    trim,
    contains(__, ['true', 't', 'yes', 'y']),
  );

module.exports = stringToBoolean;
