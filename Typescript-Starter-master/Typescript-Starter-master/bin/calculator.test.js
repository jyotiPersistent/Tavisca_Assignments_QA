"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("../src/calculator");
test('Verify addition of 4 and 5.', function () {
    var firstOperand = 4;
    var secondOperand = 5;
    var operation = 'addition';
    var expectedOutput = 9;
    expect(calculator_1.Calculator.calculateOperation(firstOperand, secondOperand, operation)).toBe(expectedOutput);
});
test('Verify subtraction of 10 and 5.', function () {
    var firstOperand = 10;
    var secondOperand = 5;
    var operation = 'subtraction';
    var expectedOutput = 5;
    expect(calculator_1.Calculator.calculateOperation(firstOperand, secondOperand, operation)).toBe(expectedOutput);
});
test('Verify multiplication of 4 and 5.', function () {
    var firstOperand = 4;
    var secondOperand = 5;
    var operation = 'multiplication';
    var expectedOutput = 20;
    expect(calculator_1.Calculator.calculateOperation(firstOperand, secondOperand, operation)).toBe(expectedOutput);
});
test('Verify division of 10 and 5.', function () {
    var firstOperand = 10;
    var secondOperand = 5;
    var operation = 'division';
    var expectedOutput = 2;
    expect(calculator_1.Calculator.calculateOperation(firstOperand, secondOperand, operation)).toBe(expectedOutput);
});
