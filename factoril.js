// Implement a function named factorial that has one parameter: 
// an integer, n . It must return the value of n! (i.e., n factorial).

function factorial ( n ) {
    if (n === 0) { 
        return 1
    }
    else {
       return   n * factorial(n-1)
    }
} 

// with recursion
console.log(factorial(4));