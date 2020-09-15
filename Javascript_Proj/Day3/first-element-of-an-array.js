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

console.log(GetFirstElementOfArrayInTraditionalWay([7, 9, 0, -2]));
console.log(GetFirstElementOfArrayInTraditionalWay([],3));
console.log(GetFirstElementOfArrayInTraditionalWay([7, 9, 0, -2],3));
console.log(GetFirstElementOfArrayInTraditionalWay([7, 9, 0, -2],6));
console.log(GetFirstElementOfArrayInTraditionalWay([7, 9, 0, -2],-3));

//Function to get the first element of an array
function GetFirstElementOfArrayInTraditionalWay(elementArray, number) {
   if(elementArray == null || number < 0){
       return [];
   }
   if(number == null){ 
       return elementArray[0];
   }
   return elementArray.slice(0,number);
};


//Declare two dimentional array
var arrays = [
    [7, 9, 0, -2],
    [[],3],
    [[7, 9, 0, -2],3],
    [[7, 9, 0],6],
    [[],3]
];

//try with recursion 

//***** [A]Traditional way to get the first element of an array *****

//calling method
GetFirstElementOfArrayInTraditionalWay(arrays)

//Method declaration
function GetFirstElementOfArrayInTraditionalWay(arrays)
{
    for(let i = 0; i < arrays.length; i++){ 

        for(let j=0;j<arrays[i].length;j++)
        {
            if(j==0)
            {
                var firstElement = arrays[i][j];
                console.log('[A] Traditional way : The first element of an array is :'  + firstElement);
                break;
            }          
        }       
    }
}