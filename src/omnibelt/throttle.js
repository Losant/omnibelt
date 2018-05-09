const compose = require('ramda/src/compose');
const curryN = require('ramda/src/curryN');
const flip = require('lodash/fp/flip');
const _throttle = require('lodash/throttle');

/**
 * @signature Object -> Number -> Function -> Function
 */
const throttle = compose(curryN(3), flip)(_throttle);

module.exports = throttle;
