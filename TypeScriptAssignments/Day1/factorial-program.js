//*******Global Variable Declaration*******
var inputNumber = 5;
//const inputNumber = '5'; 
//*********Recursive**********
//Variable declaration
var factorialNumberRecursive = 1;
//Calling Method
factorialNumberRecursive = getFactorialNumberRecursive(inputNumber);
console.log("1. [Recursive Method] The factorial number  is " + factorialNumberRecursive);
//Method Declaration
function getFactorialNumberRecursive(inputNumber) {
    if (inputNumber > 0) {
        factorialNumberRecursive = factorialNumberRecursive * inputNumber;
        getFactorialNumberRecursive(inputNumber - 1);
    }
    return factorialNumberRecursive;
}
//*********For Loop************
//Calling Method
getFactorialNumberWithForLoop(inputNumber);
//Method Declaration
function getFactorialNumberWithForLoop(inputNumber) {
    var factorialNumber = 1;
    var i;
    for (i = inputNumber; i >= 1; i--) {
        factorialNumber *= i;
    }
    console.log("2. [For Loop]: The factorial number  is " + factorialNumber);
    // return factorialNumber;
}
//******While Loop*******
//Calling Method
getFactorialNumberWithWhileLoop(inputNumber);
//Method Declaration
function getFactorialNumberWithWhileLoop(inputNumber) {
    var factorialNumber = 1;
    while (inputNumber >= 1) {
        factorialNumber = factorialNumber * inputNumber;
        inputNumber--;
    }
    console.log("3. [While loop] The factorial number  is " + factorialNumber);
    // return factorialNumber;
}
// module.exports = getFactorialNumberRecursive;

// const getFactorialNumberWithWhileLoop=getFactorialNumberWithWhileLoop(inputNumber)
 
// const getFactorialNumberWithForLoop=getFactorialNumberWithForLoop(inputNumber)

// export{getFactorialNumberWithWhileLoop,getFactorialNumberWithForLoop}

// const sumOfArrayTraditionalLogic=sumOfArrayElementsTraditionalLogic(dataSet) 
// const sumOfArrayBuiltIn=sumOfArrayElemnts(dataSet)
// export{sumOfArrayTraditionalLogic,sumOfArrayBuiltIn}
