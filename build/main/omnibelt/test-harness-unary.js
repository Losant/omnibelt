// TODO: REMOVE THIS! This has been deprecated!
//       See `test-harness` for its successor (and `test-cases`)
//       The upgrade path is to incrementally update tests that use this
// TODO: https://github.com/Losant/omnibelt/issues/39
// TODO: https://github.com/Losant/omnibelt/issues/40
var curry = require('ramda/src/curry');
var map = require('ramda/src/map');
var pipe = require('ramda/src/pipe');
var format = require('./format');
var stringify = require('./stringify');
var testHarnessUnary = curry(function (expect, func, subj, expected) {
    it(pipe(map(stringify), format('{subj} ==> {expected}'))({ subj: subj, expected: expected }), function () { return expect(func(subj)).toEqual(expected); });
});
module.exports = testHarnessUnary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1oYXJuZXNzLXVuYXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3Rlc3QtaGFybmVzcy11bmFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsZ0VBQWdFO0FBQ2hFLHdFQUF3RTtBQUN4RSxxREFBcUQ7QUFDckQscURBQXFEO0FBRXJELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNyQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXpDLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUTtJQUMxRCxFQUFFLENBQ0EsSUFBSSxDQUNGLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFDZCxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FDaEMsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsRUFDckIsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQXBDLENBQW9DLENBQzNDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMifQ==