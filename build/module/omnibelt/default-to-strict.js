const curry = require('ramda/src/curry');
const when = require('ramda/src/when');
const either = require('ramda/src/either');
const isNil = require('ramda/src/isNil');
const complement = require('ramda/src/complement');
const always = require('ramda/src/always');
const isPopulatedString = require('./is-populated-string');
/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature * a -> * b -> a|b
 */
const defaultToStrict = curry((def, val) => when(either(isNil, complement(isPopulatedString)), always(def))(val));
module.exports = defaultToStrict;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC10by1zdHJpY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZGVmYXVsdC10by1zdHJpY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDbkQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFM0MsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUUzRDs7Ozs7R0FLRztBQUNILE1BQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUN6QyxJQUFJLENBQ0YsTUFBTSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ1osQ0FBQyxHQUFHLENBQUMsQ0FDUCxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMifQ==