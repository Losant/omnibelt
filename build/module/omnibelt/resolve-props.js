const { map, keys } = require('ramda');
/**
 * Takes an object where the values may be promises
 * and returns an object where all those promises are resolved.
 * If any individual promise is rejected, resolveProps rejects.
 *
 * Similar to http://bluebirdjs.com/docs/api/promise.props.html
 *
 * REASONING: we are trying to no longer use libraries that create their own "Promise"
 * classes with special methods (q/bluebird) - i.e., we want to treat everything like a native promise
 *
 * @signature Object -> Promise<Object>
 */
const resolveProps = async (obj) => {
    const result = {};
    await Promise.all(map(async (key) => {
        result[key] = await obj[key];
    }, keys(obj)));
    return result;
};
module.exports = resolveProps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZS1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9yZXNvbHZlLXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXZDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxZQUFZLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2pDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNsQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyJ9