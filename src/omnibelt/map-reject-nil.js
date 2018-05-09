const isNotNil  = require('./is-not-nil');
const mapFilter = require('./map-filter');

/**
 * Maps an array by the given transform, but only the transformed values that are not nil
 * are included in the resulting array.
 *
 * @signature xf -> [*] -> [*]
 */
const mapRejectNil = mapFilter(isNotNil);

module.exports = mapRejectNil;
