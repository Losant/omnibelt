const mergeWith = require('lodash/fp/mergeWith');
const concat = require('ramda/src/concat');
const is = require('ramda/src/is');
/**
 * A merge that also handles arrays.
 *
 * @signature Object -> Object -> Object
 *
 * @example
 *   mergeWithArrays({
 *     foo: [1, 2, 3],
 *     bar: 'first',
 *     baz: true,
 *   }, {
 *     foo: [4, 5],
 *     bar: 'second',
 *   });
 *   // {
 *   //   foo: [1, 2, 3, 4, 5],
 *   //   bar: 'second',
 *   //   baz: true,
 *   // }
 */
const mergeWithArrays = mergeWith((x, y) => {
    if (is(Array, x)) {
        return concat(x, y);
    }
    // return `undefined` so `mergeWith` does default
});
module.exports = mergeWithArrays;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2Utd2l0aC1hcnJheXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvbWVyZ2Utd2l0aC1hcnJheXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDakQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBQ0gsTUFBTSxlQUFlLEdBQ25CLFNBQVMsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNQLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFO0lBQzFDLGlEQUFpRDtBQUNuRCxDQUFDLENBQ0YsQ0FBQztBQUVKLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDIn0=