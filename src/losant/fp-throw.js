const { is } = require('ramda');

// TODO: TESTS
// TODO: DOCS

/**
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
