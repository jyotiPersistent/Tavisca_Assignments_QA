// export module Calculator
// {
  let result:any='';

    //function for displaying v
    // export const evaluate = ((result:any,key:any):any=>
    // {
    function evaluate(key:any):any
    {
      debugger;

      if((<HTMLInputElement>document.getElementById("output")) !==null)
      {   
          result=(<HTMLInputElement>document.getElementById("output")).value;
      }

      switch (key) 
      {
                        case "c":
                            result = _clr();
                            break;
                        case "=": 
                          result = _solve(result);
                            break;
                        default:
                            result +=key;                       
                            break;                  
        }

        if((<HTMLInputElement>document.getElementById("output")) !==null)
        {
            (<HTMLInputElement>document.getElementById("output")).value =result;
        }
        return result;

      }
      // });

    //function for evaluation
    function _solve(result:any):any
    {
      debugger;
        let x:any = result;
        let y:any = eval(x);
    return y;
    }

    //function for clearing the display
    function _clr()
    {
        return "";
    }
    
  // }

  // }







