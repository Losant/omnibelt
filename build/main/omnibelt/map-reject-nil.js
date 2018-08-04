var isNotNil = require('./is-not-nil');
var mapFilter = require('./map-filter');
/**
 * Maps an array by the given transform, but only the transformed values that are not nil
 * are included in the resulting array.
 *
 * @signature xf -> [*] -> [*]
 */
var mapRejectNil = mapFilter(isNotNil);
module.exports = mapRejectNil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXJlamVjdC1uaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvbWFwLXJlamVjdC1uaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxRQUFRLEdBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzFDLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUxQzs7Ozs7R0FLRztBQUNILElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV6QyxNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyJ9