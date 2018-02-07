const filterMap = require('./filter-map');
const isNotNil  = require('./is-not-nil');

/**
 * Maps an array by the given transform, but only values that are not nil
 * are transformed and included in the resulting array.
 *
 * @signature xf -> [*] -> [*]
 */
const rejectNilMap = filterMap(isNotNil);

module.exports = rejectNilMap;
