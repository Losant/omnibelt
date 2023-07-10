const debounce = require('./debounce');

/**
 * Creates a debounced function which is called on the trailing edge of the wait timeout.
 *
 * @signature Number -> Function -> Function
 *
 * @example
 *   debounceTrailing(200, () => {});
 */

const debounceTrailing = debounce({ trailing: true, leading: false });

module.exports = debounceTrailing;
