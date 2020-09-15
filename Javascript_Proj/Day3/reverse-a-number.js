/*Assignment 2:
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/

//Declare global variable
const inputString = '54321';

//*****[A] Traditional way to get reversed number*****

//calling method
GetreversedNumberInTraditionalWay(inputString);
//Method declaration
function GetreversedNumberInTraditionalWay(inputString)
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
    console.log('[A] Traditional way : Reversed number of "'+ inputString +'" is ' + reverseString);
}

//check index of any element in foreach loop

//*****[B] Inbuilt funtions to get reversed number*****

//calling method
 GetreversedNumberByInbuiltFunction(inputString);
//Method declaration
function GetreversedNumberByInbuiltFunction(inputString) {
 let outputstring= ( 
        inputString
        .toString()
        .split('')
        .reverse()
        .join('') 
  )     
  console.log('[B] Inbuilt funtions : Reversed number of "'+ inputString +'" is ' +outputstring);            
}