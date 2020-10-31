var numArray = [1, 2, 3, 4, 5, 6];

//using traditional way
function sumOfArrayEments(numArray){
let sumOfArrayElements =0;
for( let i=0; i<numArray.length; i++){
    sumOfArrayElements += numArray[i];
}
return sumOfArrayElements;
}

console.log(sumOfArrayEments(numArray));

module.export = sumOfArrayEments;