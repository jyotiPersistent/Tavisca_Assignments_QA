
// Assignment 3: Alerts/log to console "Divisible by 5" when number is divisible by 5, alerts "Divisible by 3" when it is divisible by 3 and alerts "Divisible by 15" when it is divisible by 15.
const DivisibleArray=[2, 100, 20, 15, 30, 6, 9, 10, 12, 150];
GetDivisibleNumber(DivisibleArray);

/* function: GetDivisibleNumber
 * Argument : arr */
function GetDivisibleNumber(arr)
{   
    console.log('Assignment 3: Get Divisible Number of 3,5,15 from array: [' + DivisibleArray + ']');
     //begin the loop
     for(i=0; i < arr.length; i++){
          //detect values divisible by 3,5,15   
            if(arr[i] % 3 == 0 && arr[i] % 5 == 0 ){
                console.log(arr[i] + ' is divisible by 3,5,15');
            }
            //detect values divisible by 5
            else if(arr[i] % 5 == 0){
                console.log(arr[i] + ' is divisible by 5');
            }
            //detect values divisible by 3
            else if(arr[i] % 3 == 0){
                console.log(arr[i] + ' is divisible by 3');
            }            
            //detect values not divisible by 3,5,15
            else {
                console.log(arr[i] + ' is not divisible by 3,5,15');
            }  
     }
}