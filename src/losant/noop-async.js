/**
 * This is async version of noop.
 *
 * Explicitly went with async instead of Promise.resolve, since under the covers they might not
 * be identical, and the name noopAsync suggests "uses async"
 *
 * @signature -> Promise<undefined>
 */
const noopAsync = async () => {};

module.exports = noopAsync;
