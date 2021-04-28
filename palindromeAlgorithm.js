input: 'string phrase';
output: true/false ;

let len = input.length; 
let c = 0; 

while (c <= length/2) 
    if (phrase[c] != phrase[len -1 -c]) 
        return false;
    c = c+1; 

return true