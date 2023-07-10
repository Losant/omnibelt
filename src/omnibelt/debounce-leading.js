const debounce = require('./debounce');

/**
 * @signature Number -> Function -> Function
 */
const debounceLeading = debounce({ trailing: false, leading: true });

module.exports = debounceLeading;
