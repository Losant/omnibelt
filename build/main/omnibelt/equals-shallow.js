var curry = require('ramda/src/curry');
var concat = require('ramda/src/concat');
var uniq = require('ramda/src/uniq');
var keys = require('ramda/src/keys');
var has = require('ramda/src/has');
var all = require('ramda/src/all');
var is = require('ramda/src/is');
/**
 * @signature * -> * -> Boolean
 *
 * @example
 *   equalsShallow({ a: 1 }, { a: 1 }); // true
 *   equalsShallow({ a: 1 }, { a: 2 }); // false
 *   equalsShallow({ a: { b: 1 } }, { a: { b: 1 } }); // false
 */
var equalsShallow = curry(function (a, b) {
    // Strict equality check.
    if (Object.is(a, b)) {
        return true;
    }
    if (!is(Object, a) || !is(Object, b)) {
        return false;
    }
    var aKeys = keys(a);
    var bKeys = keys(b);
    // If the objects have different numbers of keys then we know they're not equivalent.
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    // Check if either object has a key that the other doesn't
    // OR if any key's value is different between objects
    var hasMatchingKeysAndValues = all(function (key) { return all(has(key), [a, b]) && Object.is(a[key], b[key]); }, uniq(concat(aKeys, bKeys)));
    if (!hasMatchingKeysAndValues) {
        return false;
    }
    return true;
});
module.exports = equalsShallow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWxzLXNoYWxsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZXF1YWxzLXNoYWxsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNyQyxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFbkM7Ozs7Ozs7R0FPRztBQUNILElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9CLHlCQUF5QjtJQUN6QixJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDcEMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEIscUZBQXFGO0lBQ3JGLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCwwREFBMEQ7SUFDMUQscURBQXFEO0lBQ3JELElBQU0sd0JBQXdCLEdBQUcsR0FBRyxDQUNsQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBbEQsQ0FBa0QsRUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDM0IsQ0FBQztJQUVGLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtRQUM3QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDIn0=