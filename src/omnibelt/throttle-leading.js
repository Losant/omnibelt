import throttle from './throttle';

/**
 * @signature Number -> Function -> Function
 */
const throttleLeading = throttle({ trailing: false });

export default throttleLeading;
