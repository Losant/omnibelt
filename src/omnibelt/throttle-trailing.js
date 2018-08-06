import throttle from './throttle';

/**
 * @signature Number -> Function -> Function
 */
const throttleTrailing = throttle({ leading: false });

export default throttleTrailing;
