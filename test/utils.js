const expect = require('expect');
const testHarness = require('../src/losant/test-harness');
const testCases = require('../src/losant/test-cases');
const testHarnessUnary = require('../src/losant/test-harness-unary');

module.exports = {
  testHarness: testHarness(expect),
  testCases: testCases(expect),
  testHarnessUnary: testHarnessUnary(expect)
};
