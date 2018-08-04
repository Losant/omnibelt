const curry = require('ramda/src/curry');
const reduce = require('ramda/src/reduce');
const assoc = require('ramda/src/assoc');
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
const keyByWith = curry((getKey, getValue, list) => {
    const reducer = (acc, obj) => {
        const key = getKey(obj);
        const value = getValue(obj);
        return assoc(key, value, acc);
    };
    return reduce(reducer, {}, list);
});
module.exports = keyByWith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LWJ5LXdpdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQva2V5LWJ5LXdpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekM7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNqRCxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUMzQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVCLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIn0=