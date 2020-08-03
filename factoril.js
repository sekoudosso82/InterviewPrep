// Implement a function named factorial that has one parameter: 
// an integer, n . It must return the value of n! (i.e., n factorial).

function factorial ( n ) {
    let result = 0
    if (n === 0) { 
        result += 1
        return result
    }
    else {
       result +=  n * factorial(n-1)
   
    }

    return result
} 

// with recursion
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
