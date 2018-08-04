const is = require('ramda/src/is');
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
const fpThrow = (error) => {
    if (is(Error, error)) {
        throw error;
    }
    throw new Error(error);
};
module.exports = fpThrow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnAtdGhyb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZnAtdGhyb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRW5DOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDeEIsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sS0FBSyxDQUFDO0tBQ2I7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIn0=