const pipe = require('ramda/src/pipe');
const curry = require('ramda/src/curry');
const map = require('ramda/src/map');
const apply = require('ramda/src/apply');
const dotPath = require('./dot-path');
const equalsShallow = require('./equals-shallow');
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
const eqDotPathsShallow = curry((stringPath, a, b) => pipe(map(dotPath(stringPath)), apply(equalsShallow))([a, b]));
module.exports = eqDotPathsShallow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXEtZG90LXBhdGhzLXNoYWxsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZXEtZG90LXBhdGhzLXNoYWxsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVsRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ25ELElBQUksQ0FDRixHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3hCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FDckIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNWLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDIn0=