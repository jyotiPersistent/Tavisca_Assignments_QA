/* Assignment 3: 	
Given two arrays determine if the first array is contained in the second or if the second array is contained in the first or if both arays are same or if none of the above statements are true.
Examples:
A = [1, 2, 3], B = [1, 2, 3, 4, 5], A is a subset of B
A = [3, 4, 5], B = [1, 2, 3, 4, 5], A is a subset of B
A = [3, 4], B = [1, 2, 3, 4, 5], A is a subset of B
A = [1, 2, 3], B = [1, 2, 3], A is same as B
A = [1, 2, 3, 4, 5], B = [2, 3, 4], B is a subset of A
A = [1, 2, 6], B = [1, 2, 3, 4, 5], A and B are not equal. */


//declare constant array of array
var array = [
    [1,2,3,4,5,6],
    [4,3,5,6],
    [4,3,5,6],
    [3,4,5,6,7,8],
    [4,3,5,7]
];

// //Check if Array B is subset of A
// CheckSubsetArray(array[0], array[1]);

// //Check if Array A is subset of B
// CheckSubsetArray(array[2], array[3]);

// //Check if Array A and B are same
// CheckSubsetArray(array[1], array[2]);

// //Check if Array A and B are not equal
// CheckSubsetArray(array[2], array[4]);

  //Declaring method to check subset array
  export const CheckSubsetArray = ((arrayA:number[],arrayB:number[])=>
{
    let result:string='';
    if(arrayA.every( ai => arrayB.includes(ai)) && arrayA.length !=arrayB.length)
    {
        result='Array A is subset of Array B';
        console.log(result);  
    }
    else if(arrayB.every( ai => arrayA.includes(ai)) && arrayA.length !=arrayB.length)
    {
        result ='Array B is subset of Array A';
        console.log(result);  
    }   
    else if(arrayA.every( ai => arrayB.includes(ai)) && arrayA.length ==arrayB.length)
    {
        result='Array A is same as Array B';
        console.log(result);  
    }
    else
    {
        result='Array A and Array B are not equal.';
        console.log(result);  
    }
    return result;
});

