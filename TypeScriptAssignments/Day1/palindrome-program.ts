
//****Global Variable Declaration*****
const inputString:string ='madam'
//const inputString:string ='nurses'

////Calling Method
isPalindrome(inputString);

//Method Declaration
function isPalindrome(inputString:string)
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
    }
    else
    {
        console.log('Input string is not a Palindrome string.');        
    }
 }
