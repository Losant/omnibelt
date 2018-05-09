const throttle = require('./throttle');

/**
 * @signature Number -> Function -> Function
 */
const throttleLeading = throttle({ trailing: false });

module.exports = throttleLeading;
