/**
 * Returns a deferred. No longer in the Promise spec
 * (or Bluebird) - but extremely useful.
 * http://bluebirdjs.com/docs/api/deferred-migration.html
 * https://github.com/kriskowal/q/wiki/API-Reference#qdefer
 *
 * @signature -> Object
 */
const defer = () => {
    let resolve, reject;
    const promise = new Promise((f, r) => {
        resolve = f;
        reject = r;
    });
    return { resolve, reject, promise };
};
module.exports = defer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZGVmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUNILE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtJQUNqQixJQUFJLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDcEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNaLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ3RDLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIn0=