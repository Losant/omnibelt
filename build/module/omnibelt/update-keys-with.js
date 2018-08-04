const curry = require('ramda/src/curry');
const prop = require('ramda/src/prop');
const propOr = require('ramda/src/propOr');
const reduce = require('ramda/src/reduce');
const keys = require('ramda/src/keys');
/**
 * Updates the keys for an object using the provided function and a map of
 * { oldKey: newKey }. The type of newKey will depend on which function is
 * passed as the first argument (i.e. if you use `assoc` it will expect a
 * string, if you use `assocPath` it will expect an array, etc.)
 *
 * @signature (String | [String], *, { a: * } -> { b: * }) -> { a: String | [String] } -> { b: * }
 */
const updateKeysWith = curry((fn, evolveKeysMap, obj) => {
    const reducer = (acc, key) => {
        const newKey = propOr(key, key, evolveKeysMap);
        const newValue = prop(key, obj);
        return fn(newKey, newValue, acc);
    };
    return reduce(reducer, {}, keys(obj));
});
module.exports = updateKeysWith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWtleXMtd2l0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC91cGRhdGUta2V5cy13aXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXZDOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3RELE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzNCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFaEMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMifQ==