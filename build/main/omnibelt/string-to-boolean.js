var pipe = require('ramda/src/pipe');
var toLower = require('ramda/src/toLower');
var trim = require('ramda/src/trim');
var defaultTo = require('ramda/src/defaultTo');
var equalsAny = require('./equals-any');
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
var stringToBoolean = pipe(defaultTo(''), toLower, trim, equalsAny(['true', 't', 'yes', 'y']));
module.exports = stringToBoolean;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXRvLWJvb2xlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvc3RyaW5nLXRvLWJvb2xlYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFakQsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTFDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixPQUFPLEVBQ1AsSUFBSSxFQUNKLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQ3JDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyJ9