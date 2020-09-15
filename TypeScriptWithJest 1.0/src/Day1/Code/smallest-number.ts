
// Assignment 2: Return smallest number from an array.
let ArrayName =['A', 'B'];
const ArrayA=[100, 2, 5, 12, 0];
const ArrayB= [-5, -10 , 100, 20, 30, -30, 12];

// GetSmallestNumber(ArrayName[0],ArrayA);
// GetSmallestNumber(ArrayName[1], ArrayB);

/* function: GetSmallestNumber
 * Argument : arrName, arr */
export const GetSmallestNumber = ((arrName:string,arr:number[])=>
{   
    console.log('Assignment 2: Get Smallest Number for array: ' + arrName + ': [' + arr +']');
   
    //(a) Get smallest number using inbuilt function, fast method
       var smallestNumber = Math.min.apply(Math, arr)
   
    //(b) Get smallest number using loop, has performance impact
    // var smallestNumber = arr[0]
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] < smallestNumber) {
    //     smallestNumber = arr[i]
    //     }
    // }

    console.log('Smallest number in array '+ arrName +' is: ' + smallestNumber)
    return smallestNumber;
});