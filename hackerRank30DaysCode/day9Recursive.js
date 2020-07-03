function factorial(n) {
    if (n < 2){
        return 1
    }
    // console.log( n*factorial(n-1) )    
    return ( n*factorial(n-1) )
    
}