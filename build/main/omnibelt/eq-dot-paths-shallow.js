var pipe = require('ramda/src/pipe');
var curry = require('ramda/src/curry');
var map = require('ramda/src/map');
var apply = require('ramda/src/apply');
var dotPath = require('./dot-path');
var equalsShallow = require('./equals-shallow');
/**
 * Useful for doing comparing two objects (e.g. component props or state) to see if a
 * particular property value has changed. Accepts either a standard key name or a
 * dot-separated path for the property to check and does a shallow equality check on the
 * property values.
 *
 * @signature String -> Object -> Object -> Boolean
 *
 * @example
 *   eqDotPathsShallow('foo', { foo: 1 }, { foo: 1 }); // => true
 *   eqDotPathsShallow('foo', { foo: 1 }, { foo: 2 }); // => false
 *   eqDotPathsShallow('a', { a: [1, 2, 3] }, { a: [1, 2, 3] }); // => true
 *   eqDotPathsShallow('a', { a: { b: [1, 2, 3] } }, { a: { b: [1, 2, 3] } }); // false
 */
var eqDotPathsShallow = curry(function (stringPath, a, b) {
    return pipe(map(dotPath(stringPath)), apply(equalsShallow))([a, b]);
});
module.exports = eqDotPathsShallow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXEtZG90LXBhdGhzLXNoYWxsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZXEtZG90LXBhdGhzLXNoYWxsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXpDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QyxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVsRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsVUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDL0MsT0FBQSxJQUFJLENBQ0YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUN4QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQ3JCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFIVCxDQUdTLENBQ1YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMifQ==