"use strict";
exports.__esModule = true;
exports.isPalindrome = void 0;
//****Global Variable Declaration*****
var inputString = 'madam';
//const inputString:string ='nurses'
// ////Calling Method
// isPalindrome(inputString);
//Method Declaration
exports.isPalindrome = (function (inputString) {
    var outputString = '';
    outputString =
        inputString
            .split('')
            .reverse()
            .join('');
    if (outputString === inputString) {
        console.log('Input string is a Palindrome string.');
        return true;
    }
    else {
        console.log('Input string is not a Palindrome string.');
        return false;
    }
});
