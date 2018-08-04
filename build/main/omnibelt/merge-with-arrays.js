var mergeWith = require('lodash/fp/mergeWith');
var concat = require('ramda/src/concat');
var is = require('ramda/src/is');
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
var mergeWithArrays = mergeWith(function (x, y) {
    if (is(Array, x)) {
        return concat(x, y);
    }
    // return `undefined` so `mergeWith` does default
});
module.exports = mergeWithArrays;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2Utd2l0aC1hcnJheXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvbWVyZ2Utd2l0aC1hcnJheXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDakQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBQ0gsSUFBTSxlQUFlLEdBQ25CLFNBQVMsQ0FDUCxVQUFDLENBQUMsRUFBRSxDQUFDO0lBQ0gsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQUU7SUFDMUMsaURBQWlEO0FBQ25ELENBQUMsQ0FDRixDQUFDO0FBRUosTUFBTSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMifQ==