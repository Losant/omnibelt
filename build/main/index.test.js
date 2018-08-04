"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("./lodash"));
var O = __importStar(require("./omnibelt"));
var R = __importStar(require("./ramda"));
// TODO: Make this an exposed util?
// :: [{String a: * b}] -> [a]
var intersectAnyKeys = R.compose(O.intersectAny, R.map(R.keys));
it("sub utilities don't contain duplicates", function () {
    expect(intersectAnyKeys([_, R, O])).toEqual([]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDBDQUE4QjtBQUM5Qiw0Q0FBZ0M7QUFDaEMseUNBQTZCO0FBRTdCLG1DQUFtQztBQUNuQyw4QkFBOEI7QUFDOUIsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUNoQyxDQUFDLENBQUMsWUFBWSxFQUNkLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNkLENBQUM7QUFFRixFQUFFLENBQUMsd0NBQXdDLEVBQUU7SUFDM0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQyxDQUFDIn0=