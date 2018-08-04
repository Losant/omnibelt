var pipe = require('ramda/src/pipe');
var zipObj = require('ramda/src/zipObj');
var list = require('./list');
/**
 * Converts function arguments to an object based on the provided array of keys.
 * If an argument is passed that doesn't have a key it will be skipped.
 *
 * @func
 * @memberof module:omnibelt
 * @name argsToObj
 * @param {Array} keys - A list of props to assign arguments to (in order)
 * @param {Arguments} args - Arguments to match to `keys` (in order)
 * @return {Object} Object of `keys` matched with `args`
 * @summary [k1, k2, k3] -> (a, b, c, d) -> { k1: a, k2: b, k3: c }
 *
 * @example
 * argsToObj(['foo', 'bar'])(1, 2); // { foo: 1, bar: 2 }
 *
 * function foo() {
 *   return argsToObj(['a', 'b', 'c'])(arguments);
 * }
 * foo(1, 2, 3, 4); // { a: 1, b: 2, c: 3 }
 */
var argsToObj = function (keys) { return pipe(list, zipObj(keys)); };
module.exports = argsToObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJncy10by1vYmouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvYXJncy10by1vYmouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFM0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBQ0gsSUFBTSxTQUFTLEdBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDO0FBRXJELE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIn0=