/*Assignment 1:
A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
Assume on your own for subtotal for each species and You have to implement a function that returns the total number of legs of all the animals.*/


//Declaring class  
class Animal    
  {  
    //Define constructor to initializing an object  
    constructor(animalCount,noOfLegs)  
    {  
      this.animalCount=animalCount;  
      this.noOfLegs=noOfLegs;    
    }  

    //Declaring method  
    CalculateLegsPerAnimal()  
    {  
       return this.animalCount * this.noOfLegs;
    }  

  }  

 //Declaring Main method  
  function Main()
  {
        //passing object to a variable   
        const chickens =new Animal(4,5);  
        const cows =new Animal(2,4);
        const pigs =new Animal(3,4);

        let totalChickenLegs =chickens.CalculateLegsPerAnimal(); //calling method  

        let totalCowLegs =cows.CalculateLegsPerAnimal(); //calling method  
        
        let totalPigLegs =pigs.CalculateLegsPerAnimal(); //calling method  

        //4*5 + 2*4 + 3*4 = 40
        console.log( "Total number of animal legs = "+(totalChickenLegs + totalCowLegs + totalPigLegs));
  }

 //calling main method  
 Main();


 //comments:
 // Change the private and public funtion name as per Tavisca guideline

