var pipe = require('ramda/src/pipe');
var curry = require('ramda/src/curry');
var map = require('ramda/src/map');
var apply = require('ramda/src/apply');
var equals = require('ramda/src/equals');
var dotPath = require('./dot-path');
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
var eqDotPaths = curry(function (stringPath, a, b) {
    return pipe(map(dotPath(stringPath)), apply(equals))([a, b]);
});
module.exports = eqDotPaths;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXEtZG90LXBhdGhzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2VxLWRvdC1wYXRocy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFM0MsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXRDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE9BQUEsSUFBSSxDQUNGLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUNkLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFIVCxDQUdTLENBQ1YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDIn0=