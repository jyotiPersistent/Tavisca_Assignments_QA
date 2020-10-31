
//function for displaying values
function dis(val)
{
    document.getElementById("output").value+=val
}

//function for evaluation
function solve()
{
    let x = document.getElementById("output").value
    let y = eval(x)
    document.getElementById("output").value = y
}

//function for clearing the display
function clr()
{
    document.getElementById("output").value = ""
}