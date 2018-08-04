var curry = require('ramda/src/curry');
var compose = require('ramda/src/compose');
var prop = require('ramda/src/prop');
var defaultToStrict = require('./default-to-strict');
/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature * a -> String -> Object -> a|*
 */
var propOrStrict = curry(function (def, key, data) {
    return compose(defaultToStrict(def), prop(key))(data);
});
module.exports = propOrStrict;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcC1vci1zdHJpY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvcHJvcC1vci1zdHJpY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFdkMsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFdkQ7Ozs7O0dBS0c7QUFDSCxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDeEMsT0FBQSxPQUFPLENBQ0wsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQ1YsQ0FBQyxJQUFJLENBQUM7QUFIUCxDQUdPLENBQ1IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDIn0=