var is = require('ramda/src/is');
/**
 * Takes an error and immediately throws it. Useful for throwing an error when
 * using pipe, compose, cond, etc. without having to create an anonymous
 * function to throw it. If the given error is not a Error instance then it
 * will be used as the error message and a new Error instance will be created
 * and then thrown.
 *
 * TODO: TESTS
 *
 * @signature Error | String -> void
 *
 * @throws {Error} The given error.
 */
var fpThrow = function (error) {
    if (is(Error, error)) {
        throw error;
    }
    throw new Error(error);
};
module.exports = fpThrow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnAtdGhyb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZnAtdGhyb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRW5DOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILElBQU0sT0FBTyxHQUFHLFVBQUMsS0FBSztJQUNwQixJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDcEIsTUFBTSxLQUFLLENBQUM7S0FDYjtJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMifQ==