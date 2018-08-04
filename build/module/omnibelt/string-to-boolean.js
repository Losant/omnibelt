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
const stringToBoolean = pipe(defaultTo(''), toLower, trim, equalsAny(['true', 't', 'yes', 'y']));
module.exports = stringToBoolean;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXRvLWJvb2xlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvc3RyaW5nLXRvLWJvb2xlYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFakQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTFDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixPQUFPLEVBQ1AsSUFBSSxFQUNKLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQ3JDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyJ9