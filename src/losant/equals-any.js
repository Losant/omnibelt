const flip = require('ramda/src/flip');
const contains = require('ramda/src/contains');

/**
 * @signature Array<* a> -> a -> Boolean
 */
const equalsAny = flip(contains);

module.exports = equalsAny;
