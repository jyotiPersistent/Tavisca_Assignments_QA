/*Assignment 2:
Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
*/

//Declare Global variable
const array = [1, 2, 3, 4, 5, 6];

//***** [A] Traditional way to compute the sum of an array of integers *****
//calling method
ComputeTheSumOfAnArrayOfIntegersInTraditionalway(array);
//Method declaration
function ComputeTheSumOfAnArrayOfIntegersInTraditionalway(array)
{
    var sumNumber=0;   

    for(i=0; i < array.length; i++)
    {
        var numericArray=parseInt(array[i]); 

        if(numericArray != NaN)
        {
            sumNumber += numericArray;
        }       
    }
    console.log('1. [Traditional way with For loop] : The sum of an array of integers :'  + sumNumber);
}


//***** [B]Inbuilt funtions to compute the sum of an array of integers *****
//calling method
ComputeTheSumOfAnArrayOfIntegersByInbuiltFuction(array);
//Method declaration
function ComputeTheSumOfAnArrayOfIntegersByInbuiltFuction(array)
{
  // Getting sum of numbers
  var SumNumber = 
  array
  .reduce(
      //convert function into arrow function, using lambda expression
                function(sum, value)
                {
                        return sum + value;
                },
         0);

console.log('2. [Inbuilt reduce() function] : The sum of an array of integers :'  + SumNumber);
}