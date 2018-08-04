var curry = require('ramda/src/curry');
var prop = require('ramda/src/prop');
var propOr = require('ramda/src/propOr');
var reduce = require('ramda/src/reduce');
var keys = require('ramda/src/keys');
/**
 * Updates the keys for an object using the provided function and a map of
 * { oldKey: newKey }. The type of newKey will depend on which function is
 * passed as the first argument (i.e. if you use `assoc` it will expect a
 * string, if you use `assocPath` it will expect an array, etc.)
 *
 * @signature (String | [String], *, { a: * } -> { b: * }) -> { a: String | [String] } -> { b: * }
 */
var updateKeysWith = curry(function (fn, evolveKeysMap, obj) {
    var reducer = function (acc, key) {
        var newKey = propOr(key, key, evolveKeysMap);
        var newValue = prop(key, obj);
        return fn(newKey, newValue, acc);
    };
    return reduce(reducer, {}, keys(obj));
});
module.exports = updateKeysWith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWtleXMtd2l0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC91cGRhdGUta2V5cy13aXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXZDOzs7Ozs7O0dBT0c7QUFDSCxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsVUFBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQUc7SUFDbEQsSUFBTSxPQUFPLEdBQUcsVUFBQyxHQUFHLEVBQUUsR0FBRztRQUN2QixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMvQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDIn0=