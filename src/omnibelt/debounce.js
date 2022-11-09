const compose = require('@pnpm/ramda/src/compose');
const curryN = require('@pnpm/ramda/src/curryN');
const flip = require('lodash/fp/flip');
const _debounce = require('lodash/debounce');

/**
 * @signature Object -> Number -> Function -> Function
 */
const debounce = compose(curryN(3), flip)(_debounce);

module.exports = debounce;
