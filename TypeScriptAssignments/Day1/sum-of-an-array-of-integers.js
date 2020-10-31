//*****Globle Variable Declaration********
var inputArray = [1, 2, 3, 4, 5];
//******While loop*********
//Calling Method
getSumOfArrayOfIntegersWithWhileLoop(inputArray);
//Method Declaration
function getSumOfArrayOfIntegersWithWhileLoop(inputArrayForWhileLoop) {
    var sumValueOfArray = 0;
    var i = 0;
    while (i < inputArrayForWhileLoop.length) {
        sumValueOfArray = sumValueOfArray + inputArrayForWhileLoop[i];
        i++;
    }
    console.log('1. [While Loop] Sum of array of integer values: ' + sumValueOfArray);
}
// *******inbuilt method*********
//Calling Method
getSumOfArrayOfIntegersWithInbuiltFunction(inputArray);
//Method Declaration
function getSumOfArrayOfIntegersWithInbuiltFunction(inputArrayForWhileLoop) {
    if (inputArrayForWhileLoop.length === 0) {
        console.log('Input array is empty :' + inputArrayForWhileLoop);
    }
    else {
        var additionOfArrayElements = inputArrayForWhileLoop
            .reduce(function (sum, arrayValue) {
            return sum + arrayValue;
        }, 0);
        console.log('2. [Inbuilt Method] Sum of array of integer values: ' + additionOfArrayElements);
    }
}
