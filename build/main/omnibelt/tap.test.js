var compose = require('ramda').compose;
var testCases = require('../../test/utils').testCases;
var tap = require('./tap');
testCases(tap, [
    [[function () { return 'bar'; }, 'foo'], 'foo']
]);
it('Side effects happen', function () {
    var sideEffected = 'not foo';
    var desiredEffect = 'foo';
    var uneffected = 'whatever';
    var actual = compose(tap(function () { sideEffected = desiredEffect; }))(uneffected);
    expect(actual).toEqual(uneffected);
    expect(sideEffected).toEqual(desiredEffect);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvdGFwLnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsSUFBQSxrQ0FBTyxDQUFzQjtBQUU3QixJQUFBLGlEQUFTLENBQWlDO0FBQ2xELElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3QixTQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2IsQ0FBQyxDQUFDLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQztDQUM5QixDQUFDLENBQUM7QUFFSCxFQUFFLENBQUMscUJBQXFCLEVBQUU7SUFDeEIsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQzdCLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1QixJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFFOUIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUNwQixHQUFHLENBQUMsY0FBUSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzdDLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFZCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDLENBQUMifQ==