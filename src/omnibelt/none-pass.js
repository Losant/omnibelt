const complement = require('ramda/src/complement');
const anyPass = require('ramda/src/anyPass');

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at none of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @signature [(*... -> Boolean)] -> (*... -> Boolean)
 *
 * @example
 *   const isClub = propEq('♣', 'suit');
 *   const isSpade = propEq('♠', 'suit');
 *   const isRedCard = nonePass([isClub, isSpade]);
 *
 *   isRedCard({ rank: '10', suit: '♣' }); //=> false
 *   isRedCard({ rank: 'Q', suit: '♠' }); //=> false
 *   isRedCard({ rank: 'Q', suit: '♦' }); //=> true
 */
const nonePass = (predicates) => complement(anyPass(predicates));

module.exports = nonePass;
