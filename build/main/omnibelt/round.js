var compose = require('ramda/src/compose');
var curryN = require('ramda/src/curryN');
var flip = require('ramda/src/flip');
var _round = require('lodash/round');
/**
 * Curried FP version of `lodash.round`
 * NOTE: `lodash/fp.round` has a fixed arity of one, therefore
 *       a precision cannot be specified.
 *
 * @signature Number -> Number -> Number
 * @see lodash.round
 */
var round = compose(flip, curryN(2))(_round);
module.exports = round;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvcm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXZDOzs7Ozs7O0dBT0c7QUFDSCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRS9DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIn0=