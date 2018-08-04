var pipe = require('ramda/src/pipe');
var split = require('ramda/src/split');
var join = require('ramda/src/join');
var curry = require('ramda/src/curry');
/**
 * Really, using `R.replace` with regex is fine, but this makes a nice interface.
 *
 * @signature String -> String -> String -> String
 *
 * @example
 *   replaceAll(
 *     '\\n',
 *     '\n',
 *     'foo\\nbar\\nbaz\\n',
 *   );
 *   // foo\nbar\nbaz\n
 */
var replaceAll = curry(function (target, replacement, data) {
    return pipe(split(target), join(replacement))(data);
});
module.exports = replaceAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZS1hbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvcmVwbGFjZS1hbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJO0lBQ2pELE9BQUEsSUFBSSxDQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLENBQ2xCLENBQUMsSUFBSSxDQUFDO0FBSFAsQ0FHTyxDQUNSLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyJ9