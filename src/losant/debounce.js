const compose = require('ramda/src/compose');
const curryN = require('ramda/src/curryN');
const flip = require('lodash/fp/flip');
const _debounce = require('lodash/debounce');

/**
 * @signature Object -> Number -> Function -> Function
 */
const debounce = compose(curryN(3), flip)(_debounce);

module.exports = debounce;
