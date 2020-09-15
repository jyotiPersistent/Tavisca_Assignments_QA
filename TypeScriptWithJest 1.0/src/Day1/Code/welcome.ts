
// Assignment 1: Write a simple Javascript program to print "Welcome {{Your Name}} to tavisca."
const name= 'Jyoti Sharma';
//GetWelcomeMessege(name);

/* function: GetWelcomeMessege
 * Argument : Name
 */
export const GetWelcomeMessege = ((name:string)=>
{   
    let result='';
    console.log('Assignment 1: Get Welcome Messege ');
    if(name != null && name != "" )
	{
        result=`Welcome ${name} to Tavisca!`;
        console.log(result);
    }
    else
    {
        result='Name is blank!';
        console.log(result);
    }
    return result;
});

