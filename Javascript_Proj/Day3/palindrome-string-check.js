/* Assignment 3:
Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

//Declare global variable
const inputStringArray =['madam','nurses']

//*****[A] traditional way to Get Palindrome String*****

//calling method to check palindrome input string 
GetPalindromeStringInTraditionalWay(inputStringArray[0]);
//calling method to check non-palindrome input string 
GetPalindromeStringInTraditionalWay(inputStringArray[1]);

//Method declaration
function GetPalindromeStringInTraditionalWay(inputStringArray) {
    let i = 0;
    let j = inputStringArray.length - 1;
    while(i < j) {
        if(inputStringArray[i] == inputStringArray[j]) {
            i++; 
            j--;
        }
        else {
            console.log('[A] Traditional Way: "' + inputStringArray + '" is not a Palindrome string.' )
            return false;
        }
    }
    console.log('[A] Traditional Way: "' + inputStringArray + '" is a Palindrome string.' )
    return true;
}


//*****[B] inbuilt function to Get Palindrome String*****

//calling method to check palindrome input string 
GetPalindromeStringByInbuiltFunction(inputStringArray[0]);
//calling method to check non-palindrome input string 
GetPalindromeStringByInbuiltFunction(inputStringArray[1]);

//Method declaration
function GetPalindromeStringByInbuiltFunction(inputStringArray) {
    const reversed = inputStringArray
    .split('')
    .reverse()
    .join('');

    if(reversed != inputStringArray)
    {
        console.log('[B] Inbuilt function: "' + inputStringArray + '" is not a Palindrome string.' )
        
    }
    else
    {
        console.log('[B] Inbuilt function: "' + inputStringArray + '" is a Palindrome string.' )

    }
    
    return inputStringArray == reversed;
}