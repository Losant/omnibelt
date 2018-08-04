const curry = require('ramda/src/curry');
const concat = require('ramda/src/concat');
const uniq = require('ramda/src/uniq');
const keys = require('ramda/src/keys');
const has = require('ramda/src/has');
const all = require('ramda/src/all');
const is = require('ramda/src/is');
/**
 * @signature * -> * -> Boolean
 *
 * @example
 *   equalsShallow({ a: 1 }, { a: 1 }); // true
 *   equalsShallow({ a: 1 }, { a: 2 }); // false
 *   equalsShallow({ a: { b: 1 } }, { a: { b: 1 } }); // false
 */
const equalsShallow = curry((a, b) => {
    // Strict equality check.
    if (Object.is(a, b)) {
        return true;
    }
    if (!is(Object, a) || !is(Object, b)) {
        return false;
    }
    const aKeys = keys(a);
    const bKeys = keys(b);
    // If the objects have different numbers of keys then we know they're not equivalent.
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    // Check if either object has a key that the other doesn't
    // OR if any key's value is different between objects
    const hasMatchingKeysAndValues = all((key) => all(has(key), [a, b]) && Object.is(a[key], b[key]), uniq(concat(aKeys, bKeys)));
    if (!hasMatchingKeysAndValues) {
        return false;
    }
    return true;
});
module.exports = equalsShallow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWxzLXNoYWxsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZXF1YWxzLXNoYWxsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNyQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFbkM7Ozs7Ozs7R0FPRztBQUNILE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNuQyx5QkFBeUI7SUFDekIsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ3BDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRCLHFGQUFxRjtJQUNyRixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNqQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsMERBQTBEO0lBQzFELHFEQUFxRDtJQUNyRCxNQUFNLHdCQUF3QixHQUFHLEdBQUcsQ0FDbEMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDM0IsQ0FBQztJQUVGLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtRQUM3QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDIn0=