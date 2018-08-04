const countBy = require('ramda/src/countBy');
const identity = require('ramda/src/identity');
/**
 * `countBy` the raw values in an array (`identity`). All values are
 * coerced to strings.
 *
 * @func
 * @memberof module:omnibelt
 * @name count
 * @param {Array} toCount - list of elements to count
 * @return {Object} Where keys are the elements of `toCount` and the values are the number of occurrences
 * @summary [a] -> { a: Number }
 * @see `R.countBy`
 *
 * @example
 * count([1, 1, 2]);       // { '1': 2, '2': 1 }
 * count(['a', 'b', 'a']); // { a: 2, b: 1 }
 */
const count = countBy(identity);
module.exports = count;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvY291bnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFL0M7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0gsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIn0=