/**
 * This is async version of noop.
 *
 * @signature -> Promise<undefined>
 */
const noopAsync = () => { return Promise.resolve(undefined); };

module.exports = noopAsync;
