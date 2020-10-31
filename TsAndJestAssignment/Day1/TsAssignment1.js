"use strict";
// Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
exports.__esModule = true;
exports.sumOfArrayBuiltIn = exports.sumOfArrayTraditionalLogic = void 0;
function sumOfArrayElemnts(dataSet) {
    return dataSet.reduce(function (total, value) { return total + value; });
}
function sumOfArrayElementsTraditionalLogic(dataSet) {
    var sum = 0;
    for (var index = 0; index < dataSet.length; index++)
        sum += dataSet[index];
    return sum;
}
var dataSet = [1, 2, 3, 4, 5, 6];
var sumOfArrayTraditionalLogic = sumOfArrayElementsTraditionalLogic(dataSet);
exports.sumOfArrayTraditionalLogic = sumOfArrayTraditionalLogic;
var sumOfArrayBuiltIn = sumOfArrayElemnts(dataSet);
exports.sumOfArrayBuiltIn = sumOfArrayBuiltIn;
console.log("The Sum of array elemnts is : " + sumOfArrayElemnts(dataSet));
console.log("Traditional Logic of The Sum of array elemnts is : " + sumOfArrayElementsTraditionalLogic(dataSet));
