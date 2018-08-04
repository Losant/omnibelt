var curry = require('ramda/src/curry');
var reduce = require('ramda/src/reduce');
var assoc = require('ramda/src/assoc');
/**
 * A variant of `keyBy` / `indexBy` that accepts getter functions for both the
 * key and the value.
 *
 * @signature (Object -> key) -> (Object -> value) -> Array<Object> -> Object<key, value>
 *
 * @example
 *     const list = [{ key: 'foo', value: 'bar' }, { key: 'a', value: 1 }];
 *     const result = keyByWith(prop('key'), prop('value'), list); // => { foo: 'bar', a: 1 }
 */
var keyByWith = curry(function (getKey, getValue, list) {
    var reducer = function (acc, obj) {
        var key = getKey(obj);
        var value = getValue(obj);
        return assoc(key, value, acc);
    };
    return reduce(reducer, {}, list);
});
module.exports = keyByWith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LWJ5LXdpdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQva2V5LWJ5LXdpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7OztHQVNHO0FBQ0gsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJO0lBQzdDLElBQU0sT0FBTyxHQUFHLFVBQUMsR0FBRyxFQUFFLEdBQUc7UUFDdkIsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1QixPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUVGLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyJ9