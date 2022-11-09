const { expect } = require('expect');
const testHarness = require('../src/omnibelt/test-harness');
const testCases = require('../src/omnibelt/test-cases');
const testHarnessUnary = require('../src/omnibelt/test-harness-unary');

module.exports = {
  testHarness: testHarness(expect),
  testCases: testCases(expect),
  testHarnessUnary: testHarnessUnary(expect)
};
