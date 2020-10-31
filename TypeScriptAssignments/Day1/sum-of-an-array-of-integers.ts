
//*****Globle Variable Declaration********
const inputArray: number[] = [1, 2, 3, 4, 5 ];


//******While loop*********

//Calling Method
getSumOfArrayOfIntegersWithWhileLoop(inputArray);

//Method Declaration
function getSumOfArrayOfIntegersWithWhileLoop(inputArrayForWhileLoop: number[])
{
    var sumValueOfArray:number =0;
    let i =0;

    while(i < inputArrayForWhileLoop.length)
    {
        sumValueOfArray = sumValueOfArray + inputArrayForWhileLoop[i];
        i++;
    }
    console.log('1. [While Loop] Sum of array of integer values: ' + sumValueOfArray);
}


// *******inbuilt method*********

//Calling Method
getSumOfArrayOfIntegersWithInbuiltFunction(inputArray);

//Method Declaration
function getSumOfArrayOfIntegersWithInbuiltFunction(inputArrayForWhileLoop: number[])
{
    if (inputArrayForWhileLoop.length === 0 ) 
    {
        console.log('Input array is empty :' + inputArrayForWhileLoop);
    } 
    else 
    {
        let additionOfArrayElements = 
                                    inputArrayForWhileLoop
                                    .reduce((sum,arrayValue) =>
                                    { 
                                        return sum + arrayValue
                                    },0);

        console.log('2. [Inbuilt Method] Sum of array of integer values: ' + additionOfArrayElements);
    }
}