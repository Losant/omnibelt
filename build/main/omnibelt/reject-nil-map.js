var filterMap = require('./filter-map');
var isNotNil = require('./is-not-nil');
/**
 * Maps an array by the given transform, but only values that are not nil
 * are transformed and included in the resulting array.
 *
 * @signature xf -> [*] -> [*]
 */
var rejectNilMap = filterMap(isNotNil);
module.exports = rejectNilMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVqZWN0LW5pbC1tYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvcmVqZWN0LW5pbC1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzFDLElBQU0sUUFBUSxHQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUxQzs7Ozs7R0FLRztBQUNILElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV6QyxNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyJ9