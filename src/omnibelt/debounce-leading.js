const debounce = require('./debounce');

/**
 * Creates a debounced function which is called on the leading edge of the wait timeout.
 *
 * @signature Number -> Function -> Function
 *
 * @example
 *   debounceLeading(200, () => {});
 */

const debounceLeading = debounce({ trailing: false, leading: true });

module.exports = debounceLeading;
