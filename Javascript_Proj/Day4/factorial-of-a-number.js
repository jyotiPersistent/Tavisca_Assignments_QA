/*Assignment 1:
Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

//declare global variable
const inputNumber=10;
//const inputNumber=0;
//const inputNumber=-10;

//***** 1. Get Factorial Number With Recusrion Method*****
//calling method
var outputNumberOfRecursion=FactorialNumberWithRecusrion(inputNumber);
console.log('1. [Recusrion Method] Factorial Number  of '+ inputNumber +' is :' + outputNumberOfRecursion);
//Method declaration
function FactorialNumberWithRecusrion(inputNumberForRecursion) {
    if (inputNumberForRecursion < 0) 
    {
        return -1;
    }   
    else if (inputNumberForRecursion === 0 || inputNumberForRecursion === 1)
    {
        return 1;
    }    
    else 
    {
        //Need to check other way to give input
        return  (inputNumberForRecursion * FactorialNumberWithRecusrion(inputNumberForRecursion - 1));
    }   
  }

//***** 2. Get Factorial Number With a WHILE loop*****
//calling method
var outputNumberOfWhileLoop=FactorialNumberWithWhileLoop(inputNumber);
console.log('2. [While Loop] Factorial Number of '+ inputNumber +' is :' + outputNumberOfWhileLoop);
//Method declaration
function FactorialNumberWithWhileLoop(inputNumberForWhileLoop) {
    var outputNumber = inputNumberForWhileLoop;
    if (inputNumberForWhileLoop < 0) 
    {
        return -1;
    }  
    if (inputNumberForWhileLoop === 0 || inputNumberForWhileLoop === 1) 
    {
        return 1; 
    }     
    while (inputNumberForWhileLoop > 1) 
    { 
        inputNumberForWhileLoop--;
        outputNumber *= inputNumberForWhileLoop;
    }
    return outputNumber;
  }


//***** 3. Get Factorial Number With a FOR loop*****
//calling method
var outputNumberOfForLoop=FactorialNumberWithForLoop(inputNumber);
console.log('3. [For Loop] Factorial Number  of '+ inputNumber +' is :' + outputNumberOfForLoop);
//Method declaration
function FactorialNumberWithForLoop(inputNumberForLoop) {
    if (inputNumberForLoop < 0) 
    {
        return -1;
    }  
    else if (inputNumberForLoop === 0 || inputNumberForLoop === 1)
    {
        return 1;
    }      
    for (var i = inputNumberForLoop - 1; i >= 1; i--)
    {
        inputNumberForLoop *= i;
    }
    return inputNumberForLoop;
  }
 