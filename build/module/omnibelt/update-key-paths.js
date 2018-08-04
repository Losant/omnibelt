const pipe = require('ramda/src/pipe');
const assocPath = require('ramda/src/assocPath');
const adjust = require('ramda/src/adjust');
const apply = require('ramda/src/apply');
const list = require('./list');
const ensureArray = require('./ensure-array');
const updateKeysWith = require('./update-keys-with');
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
const updateKeyPaths = updateKeysWith(pipe(list, adjust(ensureArray, 0), apply(assocPath)));
module.exports = updateKeyPaths;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWtleS1wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC91cGRhdGUta2V5LXBhdGhzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QyxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUVyRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUN4QyxJQUFJLEVBQ0osTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDdEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUNqQixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyJ9