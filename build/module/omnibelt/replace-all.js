const pipe = require('ramda/src/pipe');
const split = require('ramda/src/split');
const join = require('ramda/src/join');
const curry = require('ramda/src/curry');
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
const replaceAll = curry((target, replacement, data) => pipe(split(target), join(replacement))(data));
module.exports = replaceAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZS1hbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvcmVwbGFjZS1hbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUNyRCxJQUFJLENBQ0YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDbEIsQ0FBQyxJQUFJLENBQUMsQ0FDUixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMifQ==