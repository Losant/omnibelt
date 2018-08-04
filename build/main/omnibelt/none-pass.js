var complement = require('ramda/src/complement');
var anyPass = require('ramda/src/anyPass');
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
 *   const isClub = propEq('suit', '♣');
 *   const isSpade = propEq('suit', '♠');
 *   const isRedCard = nonePass([isClub, isSpade]);
 *
 *   isRedCard({ rank: '10', suit: '♣' }); //=> false
 *   isRedCard({ rank: 'Q', suit: '♠' }); //=> false
 *   isRedCard({ rank: 'Q', suit: '♦' }); //=> true
 */
var nonePass = function (predicates) { return complement(anyPass(predicates)); };
module.exports = nonePass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uZS1wYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L25vbmUtcGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNuRCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUU3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ0gsSUFBTSxRQUFRLEdBQUcsVUFBQyxVQUFVLElBQUssT0FBQSxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQS9CLENBQStCLENBQUM7QUFFakUsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMifQ==