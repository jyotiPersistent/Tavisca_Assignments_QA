
// Assignment 1: Write a simple Javascript program to print "Welcome {{Your Name}} to tavisca."
const name= 'Jyoti Sharma';
GetWelcomeMessege(name);

/* function: GetWelcomeMessege
 * Argument : Name
 */
function GetWelcomeMessege(name)
{   
    console.log('Assignment 1: Get Welcome Messege ');
    if(name != null && name != "" )
	{
        console.log(`Welcome ${name} to Tavisca!`);
    }
    else
    {
        console.log('Name is blank!');
    }
}

