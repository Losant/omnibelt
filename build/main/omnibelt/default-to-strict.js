var curry = require('ramda/src/curry');
var when = require('ramda/src/when');
var either = require('ramda/src/either');
var isNil = require('ramda/src/isNil');
var complement = require('ramda/src/complement');
var always = require('ramda/src/always');
var isPopulatedString = require('./is-populated-string');
/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature * a -> * b -> a|b
 */
var defaultToStrict = curry(function (def, val) {
    return when(either(isNil, complement(isPopulatedString)), always(def))(val);
});
module.exports = defaultToStrict;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC10by1zdHJpY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZGVmYXVsdC10by1zdHJpY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDbkQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFM0MsSUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUUzRDs7Ozs7R0FLRztBQUNILElBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3JDLE9BQUEsSUFBSSxDQUNGLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNaLENBQUMsR0FBRyxDQUFDO0FBSE4sQ0FHTSxDQUNQLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyJ9