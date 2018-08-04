var compose = require('ramda/src/compose');
var curryN = require('ramda/src/curryN');
var flip = require('lodash/fp/flip');
var _throttle = require('lodash/throttle');
/**
 * @signature Object -> Number -> Function -> Function
 */
var throttle = compose(curryN(3), flip)(_throttle);
module.exports = throttle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvdGhyb3R0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFN0M7O0dBRUc7QUFDSCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXJELE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIn0=