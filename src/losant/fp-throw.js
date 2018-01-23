import { is } from 'ramda';

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
