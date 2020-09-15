/*Assignment 2:   
Write a function that converts an object into an array, where each element represents a key-value pair.
Example-
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
Notes
Return an empty array if the object is empty. */
   
//    // Declare and array Object 
//    const arrObject = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };  
//    GetObjectToArray(arrObject);

//     //check empty object array
//     const emptyObject = { }; 
//     GetObjectToArray(emptyObject);

     //Declaring method 
     export const GetObjectToArray = ((arrObject:any)=>
    {  
        let keyValuePairArray=[];
        let result='';
        //Check if the passing object is empty.
        if(Object.keys(arrObject).length === 0)
        {      
             // Using Object.entries() function to convert convert an Object {} to an Array [] of key-value pairs 
             keyValuePairArray = Object.entries(arrObject);
             result=  'Converted object to array is empty : ';   
            console.log(result);
        }
        else
        {
            // Using Object.entries() function to convert convert an Object {} to an Array [] of key-value pairs 
            keyValuePairArray = Object.entries(arrObject);  
            result= "Converted object to array in key-value pair is: ";       
            console.log(result);  
        }   
       
        console.log(keyValuePairArray);
        return keyValuePairArray;
    }
     );