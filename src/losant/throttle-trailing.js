import throttle from './throttle';

/**
 * @signature Number -> Function -> Function
 */
const throttleTrailing = throttle({ leading: false });

module.exports = throttleTrailing;
