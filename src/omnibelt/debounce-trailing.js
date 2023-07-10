const debounce = require('./debounce');

/**
 * @signature Number -> Function -> Function
 */
const debounceTrailing = debounce({ trailing: true, leading: false });

module.exports = debounceTrailing;
