/**
 * Returns a deferred. No longer in the Promise spec
 * (or Bluebird) - but extremely useful.
 * http://bluebirdjs.com/docs/api/deferred-migration.html
 * https://github.com/kriskowal/q/wiki/API-Reference#qdefer
 *
 * @signature -> Object
 */
var defer = function () {
    var resolve, reject;
    var promise = new Promise(function (f, r) {
        resolve = f;
        reject = r;
    });
    return { resolve: resolve, reject: reject, promise: promise };
};
module.exports = defer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZGVmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUNILElBQU0sS0FBSyxHQUFHO0lBQ1osSUFBSSxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQ3BCLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0IsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNaLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO0FBQ3RDLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIn0=