const assoc = require('ramda/src/assoc');
const updateKeysWith = require('./update-keys-with');
/**
 * Updates the key names for a given object according to the provided map of
 * { oldKey: newKey } where `newKey` is a string. Any keys that aren't included
 * in the map will be passed through unchanged.
 *
 * @signature { a: String } -> { a: * } -> { b: * }
 *
 * @example
 *   updateKeys({ foo: 'bar' }, { foo: 1 }); // => { bar: 1 }
 */
const updateKeys = updateKeysWith(assoc);
module.exports = updateKeys;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWtleXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvdXBkYXRlLWtleXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekMsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFckQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDIn0=