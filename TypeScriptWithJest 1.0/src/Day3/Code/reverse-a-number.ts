/*Assignment 2:
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/

//Declare global variable
const inputString:string = '54321';

//*****[A] Traditional way to get reversed number*****

//calling method
//GetreversedNumberInTraditionalWay(inputString);
//Method declaration
export const GetreversedNumberInTraditionalWay = ((inputString:string)=>
{
    var array = [];
    for (var i = 0; i < inputString.length; i++) {
        array[i] = inputString.charAt(i);
    }
    array.reverse();
    
    var reverseString='';
    array.forEach(element => {
        reverseString=reverseString + element;
    });
    console.log('[A] Traditional way : Reversed number of "'+ inputString +'" is ' + reverseString)
    return reverseString;
});

//check index of any element in foreach loop

//*****[B] Inbuilt funtions to get reversed number*****

//calling method
 //GetreversedNumberByInbuiltFunction(inputString);
//Method declaration
export const GetreversedNumberByInbuiltFunction = ((inputString:string)=>
{
 let outputstring= ( 
        inputString
        .toString()
        .split('')
        .reverse()
        .join('') 
  )     
  console.log('[B] Inbuilt funtions : Reversed number of "'+ inputString +'" is ' +outputstring);
  return outputstring;             
});