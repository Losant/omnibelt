var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var _a = require('ramda'), compose = _a.compose, subtract = _a.subtract, __ = _a.__, curry = _a.curry;
var present = require('present');
var round = require('./round');
var within = require('./within');
var sleep = require('./sleep');
// duration :: Number -> Number -> Number
var duration = curry(function (start, end) {
    return compose(round(0), subtract(__, start))(end);
});
var VARIANCE = 10;
var harness = function (timeToSleep) { return __awaiter(_this, void 0, void 0, function () {
    var withinVariance, start, end, runtime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                withinVariance = within(timeToSleep - VARIANCE, timeToSleep + VARIANCE);
                start = present();
                return [4 /*yield*/, sleep(timeToSleep)];
            case 1:
                _a.sent();
                end = present();
                runtime = duration(start, end);
                expect(withinVariance(runtime)).toBe(true);
                return [2 /*return*/];
        }
    });
}); };
// TODO: test this better
it('sleeps', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, harness(750)];
            case 1:
                _a.sent();
                return [4 /*yield*/, harness(1000)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xlZXAudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9zbGVlcC50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBbUNBO0FBbkNNLElBQUEscUJBRWMsRUFEbEIsb0JBQU8sRUFBRSxzQkFBUSxFQUFFLFVBQUUsRUFBRSxnQkFBSyxDQUNUO0FBQ3JCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVqQyx5Q0FBeUM7QUFDekMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUNwQixVQUFDLEtBQUssRUFBRSxHQUFHO0lBQ1QsT0FBQSxPQUFPLENBQ0wsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQ3BCLENBQUMsR0FBRyxDQUFDO0FBSE4sQ0FHTSxDQUNULENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFFcEIsSUFBTSxPQUFPLEdBQUcsVUFBTyxXQUFXOzs7OztnQkFDMUIsY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxFQUFFLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFFeEUsS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixxQkFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUE7O2dCQUF4QixTQUF3QixDQUFDO2dCQUNuQixHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUVyQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7O0tBQzVDLENBQUM7QUFFRix5QkFBeUI7QUFDekIsRUFBRSxDQUFDLFFBQVEsRUFBRTs7O29CQUNYLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQTs7Z0JBQWxCLFNBQWtCLENBQUM7Z0JBQ25CLHFCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQW5CLFNBQW1CLENBQUM7Ozs7S0FDckIsQ0FBQyxDQUFDIn0=