var curry = require('ramda/src/curry');
/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @signature (a -> *) -> a -> a
 *
 * @example
 *   tap((x) => return 'bar')('foo');   // 'foo'
 *   tap(console.log)('foo');           // 'foo' (and it will have been logged)
 *   compose(
 *     split,
 *     tap((x) => dbRemoveUserByName(x)), // unrelated, but you won't have a handle on this promise
 *     toLower,
 *   )('USER NAME');
 *   // ['u', 's', 'e', 'r', 'n', 'a', 'm', 'e']
 *   // And the promise will have been kicked off to remove that user by name
 */
var tap = curry(function (fn, x) {
    fn(x);
    return x;
});
module.exports = tap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3RhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUV6Qzs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBQyxFQUFFLEVBQUUsQ0FBQztJQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMifQ==