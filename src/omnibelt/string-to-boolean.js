const pipe = require('ramda/src/pipe');
const toLower = require('ramda/src/toLower');
const trim = require('ramda/src/trim');
const defaultTo = require('ramda/src/defaultTo');

const equalsAny = require('./equals-any');

/**
 * Cast a configuration string to a boolean value by looking for common "truth" directives.
 * All else is false. This is especially useful for deciphering environment variables.
 * See tests for full behavior.
 *
 * @signature String -> Boolean
 *
 * @example
 *   stringToBoolean('True');    // true
 *   stringToBoolean(' yes ');   // true
 *   stringToBoolean('false');   // false
 *   stringToBoolean('treu');    // false
 *   stringToBoolean('asdf');    // false
 */
const stringToBoolean = pipe(
  defaultTo(''),
  toLower,
  trim,
  equalsAny(['true', 't', 'yes', 'y'])
);

module.exports = stringToBoolean;
