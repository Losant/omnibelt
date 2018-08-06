/**
 * An async function that just waits to resolve
 *
 * @signature Number -> Promise
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default sleep;
