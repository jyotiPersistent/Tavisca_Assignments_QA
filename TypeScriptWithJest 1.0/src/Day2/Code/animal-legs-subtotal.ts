/*Assignment 1:
A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
Assume on your own for subtotal for each species and You have to implement a function that returns the total number of legs of all the animals.*/
const animal:any[]=[['chicken',5],['cow',6],['pig',3]];

//calling method
//getTotalLegsCountForAllAnimals(animal);

 //Declaring Main method  
 export const getTotalLegsCountForAllAnimals = ((animal:any[])=>
  //function getTotalLegsCountForAllAnimals(animal:any[])
  {
        var i:number; 
        var totalAnimalLegs:number =0;
        for(i=0; i < animal.length; i++){
            totalAnimalLegs +=   _culateLegsPerAnimal(animal[i]);
        }      

        //2*5 + 4*6 + 4*3 = 46
        console.log( "Total number of animal legs = "+ totalAnimalLegs);
        return totalAnimalLegs;
  });

    //Declaring method  
    function _culateLegsPerAnimal(animal:any)  
    {  
        var totalAnimalLegs=0;
        if(animal[0] === 'chicken')
        {
            totalAnimalLegs = animal[1] * 2;
        }
        else if(animal[0] === 'cow')
        {
            totalAnimalLegs = animal[1] * 4;
        }
        else if(animal[0] === 'pig')
        {
            totalAnimalLegs = animal[1] * 4;
        }
        else
        {
            totalAnimalLegs = 0;
        }
       return totalAnimalLegs;
    }  

