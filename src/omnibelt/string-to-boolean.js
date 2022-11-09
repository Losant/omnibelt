const pipe = require('ramda/src/pipe.js');
const toLower = require('ramda/src/toLower.js');
const trim = require('ramda/src/trim.js');
const defaultTo = require('ramda/src/defaultTo.js');

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
