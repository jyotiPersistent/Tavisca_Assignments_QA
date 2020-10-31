
//****Global Variable Declaration*****
const inputString:string ='madam'
//const inputString:string ='nurses'

////Calling Method
// var result = isPalindrome(inputString);
// console.log('Input string is a Palindrome string.');

//Method Declaration
export const isPalindrome = ((inputString:string)=>
 {
     var outputString:string ='';
  
     outputString=
                    inputString
                    .split('')
                    .reverse()
                    .join('');
  
    if(outputString === inputString)
    {
        console.log('Input string is a Palindrome string.');
        return true;
    }
    else
    {
        console.log('Input string is not a Palindrome string.');     
        return false;   
    }
 });
