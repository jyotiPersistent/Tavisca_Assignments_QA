
//*******Global Variable Declaration*******
const inputNumber:number = 5; 
//const inputNumber = '5'; 

//*********Recursive**********

//Variable declaration
let factorialNumberRecursive:number=1;

//Calling Method
// factorialNumberRecursive = getFactorialNumberRecursive(inputNumber);
// console.log("1. [Recursive Method] The factorial number  is "+ factorialNumberRecursive); 

//Method Declaration
export const getFactorialNumberRecursive = ((inputNumber:number, factorialNumberRecursive:number)=>
 {    
  factorialNumberRecursive=_calculateFactorialNumber(inputNumber, factorialNumberRecursive)
  console.log("1. Factorial No of "+ inputNumber +" is: "+ factorialNumberRecursive);  
  return factorialNumberRecursive;  
});

function _calculateFactorialNumber(inputNumber:number, factorialNumberRecursive:number)
{
  while (inputNumber > 0) 
  {  
    factorialNumberRecursive = factorialNumberRecursive * inputNumber; 
    console.log("Factorial No of "+ inputNumber +" is: "+ factorialNumberRecursive);  
    _calculateFactorialNumber(inputNumber - 1,factorialNumberRecursive);   
  }   

  return factorialNumberRecursive; 
}


 
//*********For Loop************

// //Calling Method
// getFactorialNumberWithForLoop(inputNumber);
//Method Declaration
export const getFactorialNumberWithForLoop = ((inputNumber:number)=>
{
    var factorialNumber:number = 1; 
    var i:number;
    
    for(i = inputNumber; i >= 1; i--)
    {
        factorialNumber *= i;
    }

    console.log("2. [For Loop]: The factorial number  is "+ factorialNumber); 
    return factorialNumber;
});
 



//******While Loop*******

//Calling Method
//getFactorialNumberWithWhileLoop(inputNumber);

//Method Declaration
export const getFactorialNumberWithWhileLoop = ((inputNumber:number)=>
{
    var factorialNumber:number = 1; 
    while(inputNumber >= 1) 
    { 
       factorialNumber = factorialNumber * inputNumber; 
       inputNumber--; 
    } 

    console.log("3. [While loop] The factorial number  is "+ factorialNumber); 
    return factorialNumber;
});


