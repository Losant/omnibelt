const pipe = require('ramda/src/pipe');
const curry = require('ramda/src/curry');
const map = require('ramda/src/map');
const apply = require('ramda/src/apply');
const equals = require('ramda/src/equals');
const dotPath = require('./dot-path');
/**
 * Useful for doing comparing two objects (e.g. component props or state) to see if a
 * particular property value has changed. Accepts either a standard key name or a
 * dot-separated path for the property to check and does a deep equality check on the
 * property values.
 *
 * @signature String -> Object -> Object -> Boolean
 *   eqDotPathsShallow('foo', { foo: 1 }, { foo: 1 }); // => true
 *   eqDotPathsShallow('foo', { foo: 1 }, { foo: 2 }); // => false
 *   eqDotPathsShallow('a', { a: [1, 2, 3] }, { a: [1, 2, 3] }); // => true
 *   eqDotPathsShallow('a', { a: { b: [1, 2, 3] } }, { a: { b: [1, 2, 3] } }); // true
 */
const eqDotPaths = curry((stringPath, a, b) => pipe(map(dotPath(stringPath)), apply(equals))([a, b]));
module.exports = eqDotPaths;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXEtZG90LXBhdGhzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2VxLWRvdC1wYXRocy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFM0MsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXRDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUM1QyxJQUFJLENBQ0YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUN4QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQ2QsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNWLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyJ9