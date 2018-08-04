var curry = require('ramda/src/curry');
var converge = require('ramda/src/converge');
var merge = require('ramda/src/merge');
var identity = require('ramda/src/identity');
var applySpec = require('ramda/src/applySpec');
/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature Object a -> Object b -> Object a b
 */
var mergeSpec = curry(function (spec, data) {
    return converge(merge, [identity, applySpec(spec)])(data);
});
module.exports = mergeSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2Utc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9tZXJnZS1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQy9DLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQy9DLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRWpEOzs7OztHQUtHO0FBQ0gsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQUMsSUFBSSxFQUFFLElBQUk7SUFDakMsT0FBQSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQWxELENBQWtELENBQ25ELENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyJ9