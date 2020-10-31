

//*******Global Variable Declaration*******
const inputNumber:number = 5; 
//const inputNumber = '5'; 

//*********Recursive**********

//Variable declaration
let factorialNumberRecursive:number=1;

//Calling Method
factorialNumberRecursive = getFactorialNumberRecursive(inputNumber);
console.log("1. [Recursive Method] The factorial number  is "+ factorialNumberRecursive); 

//Method Declaration
 function getFactorialNumberRecursive(inputNumber: number): number 
 {    
  if (inputNumber > 0) 
  {  
    factorialNumberRecursive = factorialNumberRecursive * inputNumber;  
    getFactorialNumberRecursive(inputNumber - 1);  
  }  

  return factorialNumberRecursive;  
 }  


 
//*********For Loop************

//Calling Method
getFactorialNumberWithForLoop(inputNumber);
//Method Declaration
function getFactorialNumberWithForLoop(inputNumber: number)
{
    var factorialNumber:number = 1; 
    var i:number;
    
    for(i = inputNumber; i >= 1; i--)
    {
        factorialNumber *= i;
    }

    console.log("2. [For Loop]: The factorial number  is "+ factorialNumber); 
    return factorialNumber;
}
 



//******While Loop*******

//Calling Method
getFactorialNumberWithWhileLoop(inputNumber);

//Method Declaration
function getFactorialNumberWithWhileLoop(inputNumber: number)
{
    var factorialNumber:number = 1; 
    while(inputNumber >= 1) 
    { 
       factorialNumber = factorialNumber * inputNumber; 
       inputNumber--; 
    } 

    console.log("3. [While loop] The factorial number  is "+ factorialNumber); 
    return factorialNumber;
}



// module.exports =getFactorialNumberRecursive;

const factorialNumberWithWhileLoop=getFactorialNumberWithWhileLoop(inputNumber)
 
const factorialNumberWithForLoop=getFactorialNumberWithForLoop(inputNumber)

export{factorialNumberWithWhileLoop,factorialNumberWithForLoop}