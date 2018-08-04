const curry = require('ramda/src/curry');
const compose = require('ramda/src/compose');
const prop = require('ramda/src/prop');
const defaultToStrict = require('./default-to-strict');
/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature * a -> String -> Object -> a|*
 */
const propOrStrict = curry((def, key, data) => compose(defaultToStrict(def), prop(key))(data));
module.exports = propOrStrict;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcC1vci1zdHJpY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvcHJvcC1vci1zdHJpY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFdkMsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFdkQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQzVDLE9BQU8sQ0FDTCxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDVixDQUFDLElBQUksQ0FBQyxDQUNSLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyJ9