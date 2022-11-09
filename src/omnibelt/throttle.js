const compose = require('@pnpm/ramda/src/compose');
const curryN = require('@pnpm/ramda/src/curryN');
const flip = require('lodash/fp/flip');
const _throttle = require('lodash/throttle');

/**
 * @signature Object -> Number -> Function -> Function
 */
const throttle = compose(curryN(3), flip)(_throttle);

module.exports = throttle;
