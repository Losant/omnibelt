var pipe = require('ramda/src/pipe');
var assocPath = require('ramda/src/assocPath');
var adjust = require('ramda/src/adjust');
var apply = require('ramda/src/apply');
var list = require('./list');
var ensureArray = require('./ensure-array');
var updateKeysWith = require('./update-keys-with');
/**
 * Updates the key paths for a given object according to the provided map of
 * { oldKey: newKey } where `newKey` is an array. Any keys that aren't included
 * in the map will be passed through unchanged.
 *
 * @signature { a: [String] } -> { a: * } -> { b: * }
 *
 * @example
 *   updateKeyPaths({ foo: ['params', 'bar'] }, { foo: 1 }); // => { params: { bar: 1 } }
 */
var updateKeyPaths = updateKeysWith(pipe(list, adjust(ensureArray, 0), apply(assocPath)));
module.exports = updateKeyPaths;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWtleS1wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC91cGRhdGUta2V5LXBhdGhzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2pELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXpDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QyxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUVyRDs7Ozs7Ozs7O0dBU0c7QUFDSCxJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUN4QyxJQUFJLEVBQ0osTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDdEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUNqQixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyJ9