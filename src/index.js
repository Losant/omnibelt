const _ = require('./lodash');
const r = require('./ramda');
const l = require('./losant');

module.exports = {
  ..._,
  ...r,
  ...l,
};
