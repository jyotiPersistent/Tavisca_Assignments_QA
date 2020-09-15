/* Assignment 1:
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/


//***** [B] Inbuilt funtions to get the first element of an array *****

// console.log(GetFirstElementOfArrayInTraditionalWay([7, 9, 0, -2]));
// console.log(GetFirstElementOfArrayInTraditionalWay([],3));
// console.log(GetFirstElementOfArrayInTraditionalWay([7, 9, 0, -2],3));
// console.log(GetFirstElementOfArrayInTraditionalWay([7, 9, 0, -2],6));
// console.log(GetFirstElementOfArrayInTraditionalWay([7, 9, 0, -2],-3));

//Function to get the first element of an array
export const GetFirstElementOfArrayInTraditionalWay = ((elementArray:number[],number:number)=>
{
   if(elementArray == null || number < 0){
       return [];
   }
   if(number == null){ 
       return elementArray[0];
   }
   return elementArray.slice(0,number);
});
