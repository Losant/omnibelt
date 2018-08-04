/**
 * @module ramda
 */
export { F, T, __, add, addIndex, adjust, all, allPass, always, and, any, anyPass, ap, aperture, append, apply, applySpec, applyTo, ascend, assoc, assocPath, binary, bind, both, call, chain, clamp, clone, comparator, complement, compose, composeK, composeP, concat, cond, construct, constructN, contains, converge, countBy, curry, curryN, dec, defaultTo, descend, difference, differenceWith, dissoc, dissocPath, divide, drop, dropLast, dropLastWhile, dropRepeats, dropRepeatsWith, dropWhile, either, empty, endsWith, eqBy, eqProps, equals, evolve, filter, find, findIndex, findLast, findLastIndex, flatten, 
// flip,
// forEach,
forEachObjIndexed, fromPairs, groupBy, groupWith, gt, gte, has, hasIn, head, identical, identity, ifElse, inc, 
// indexBy,
indexOf, init, innerJoin, insert, insertAll, intersection, intersperse, into, invert, invertObj, invoker, is, isEmpty, isNil, join, juxt, keys, keysIn, last, lastIndexOf, length, lens, lensIndex, lensPath, lensProp, lift, liftN, lt, lte, map, mapAccum, mapAccumRight, mapObjIndexed, match, mathMod, max, maxBy, mean, median, memoize, memoizeWith, merge, mergeAll, mergeDeepLeft, mergeDeepRight, mergeDeepWith, mergeDeepWithKey, mergeWith, mergeWithKey, min, minBy, modulo, multiply, nAry, negate, none, not, nth, nthArg, o, objOf, of, omit, once, or, over, pair, partial, partialRight, partition, path, pathEq, pathOr, pathSatisfies, pick, pickAll, pickBy, pipe, pipeK, pipeP, pluck, prepend, product, project, prop, propEq, propIs, propOr, propSatisfies, props, range, reduce, reduceBy, reduceRight, reduceWhile, reduced, reject, remove, repeat, replace, reverse, scan, sequence, set, slice, sort, sortBy, sortWith, 
// split,
splitAt, splitEvery, splitWhen, startsWith, subtract, sum, symmetricDifference, symmetricDifferenceWith, tail, take, takeLast, takeLastWhile, takeWhile, 
// tap,
test, times, 
// toLower,
toPairs, toPairsIn, 
// toString,
// toUpper,
transduce, transpose, traverse, 
// trim,
tryCatch, type, unapply, unary, uncurryN, unfold, union, unionWith, uniq, uniqBy, uniqWith, unless, unnest, until, update, useWith, values, valuesIn, view, when, where, whereEq, without, xprod, zip, zipObj, zipWith, } from 'ramda';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmFtZGEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxPQUFPLEVBQ0wsQ0FBQyxFQUNELENBQUMsRUFDRCxFQUFFLEVBQ0YsR0FBRyxFQUNILFFBQVEsRUFDUixNQUFNLEVBQ04sR0FBRyxFQUNILE9BQU8sRUFDUCxNQUFNLEVBQ04sR0FBRyxFQUNILEdBQUcsRUFDSCxPQUFPLEVBQ1AsRUFBRSxFQUNGLFFBQVEsRUFDUixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxPQUFPLEVBQ1AsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsT0FBTyxFQUNQLFFBQVEsRUFDUixRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsT0FBTyxFQUNQLEtBQUssRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxPQUFPLEVBQ1AsVUFBVSxFQUNWLGNBQWMsRUFDZCxNQUFNLEVBQ04sVUFBVSxFQUNWLE1BQU0sRUFDTixJQUFJLEVBQ0osUUFBUSxFQUNSLGFBQWEsRUFDYixXQUFXLEVBQ1gsZUFBZSxFQUNmLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixJQUFJLEVBQ0osT0FBTyxFQUNQLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLElBQUksRUFDSixTQUFTLEVBQ1QsUUFBUSxFQUNSLGFBQWEsRUFDYixPQUFPO0FBQ1AsUUFBUTtBQUNSLFdBQVc7QUFDWCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULE9BQU8sRUFDUCxTQUFTLEVBQ1QsRUFBRSxFQUNG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