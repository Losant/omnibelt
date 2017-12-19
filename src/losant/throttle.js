const { compose, curryN } = require('ramda');
const { flip } = require('lodash/fp');
const { throttle } = require('lodash');

module.exports = compose(curryN(3), flip)(throttle);
