let add = function addTwoNumbers(a,b,...args) 
{
    console.log(args);
    let sum = 0;
    for(let key of args)
        sum += key;
    return sum; 
}

