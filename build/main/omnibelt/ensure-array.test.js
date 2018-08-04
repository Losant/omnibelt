var testCases = require('../../test/utils').testCases;
var ensureArray = require('./ensure-array');
var args = (function () {
    var args;
    // eslint-disable-next-line wrap-iife
    (function () {
        args = arguments; // eslint-disable-line prefer-rest-params
    })(1, 2, 3);
    return args;
})();
var dateNow = new Date();
var symbolFoo = Symbol('foo');
testCases(ensureArray, [
    [['foo'], ['foo']],
    [[['foo']], ['foo']],
    [[args], args.slice()],
    [[{ a: 1, b: 2 }], [{ a: 1, b: 2 }]],
    [[1], [1]],
    [[true], [true]],
    [[false], [false]],
    [[null], [null]],
    [[dateNow], [dateNow]],
    [[symbolFoo], [symbolFoo]]
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlLWFycmF5LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZW5zdXJlLWFycmF5LnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsSUFBQSxpREFBUyxDQUFpQztBQUNsRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUU5QyxJQUFNLElBQUksR0FBRyxDQUFDO0lBQ1osSUFBSSxJQUFJLENBQUM7SUFDVCxxQ0FBcUM7SUFDckMsQ0FBQztRQUNDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyx5Q0FBeUM7SUFDN0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNaLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNMLElBQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDM0IsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRWhDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7SUFDckIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBTSxJQUFJLFNBQUU7SUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0NBQzNCLENBQUMsQ0FBQyJ9