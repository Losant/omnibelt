const {
  pipe, toLower, trim,
} = require('ramda');

const equalsAny = require('./equals-any');

// TODO: Explicitly check `false` cases as well and throw when neither?
// stringToBoolean :: String -> Boolean
const stringToBoolean = pipe(
  toLower,
  trim,
  equalsAny(['true', 't', 'yes', 'y']),
);

module.exports = stringToBoolean;
