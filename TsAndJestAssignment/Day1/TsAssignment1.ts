// Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function sumOfArrayElemnts(dataSet: number[]): number {
    return dataSet.reduce((total, value) => total + value);
}

function sumOfArrayElementsTraditionalLogic(dataSet: number[]): number {
    let sum: number = 0;
    for (let index = 0; index < dataSet.length; index++)
        sum += dataSet[index];

    return sum;
}

var dataSet: number[] = [1, 2, 3, 4, 5, 6];

const sumOfArrayTraditionalLogic=sumOfArrayElementsTraditionalLogic(dataSet)

const sumOfArrayBuiltIn=sumOfArrayElemnts(dataSet)

console.log("The Sum of array elemnts is : " + sumOfArrayElemnts(dataSet));
console.log("Traditional Logic of The Sum of array elemnts is : " + sumOfArrayElementsTraditionalLogic(dataSet));

export{sumOfArrayTraditionalLogic,sumOfArrayBuiltIn}
