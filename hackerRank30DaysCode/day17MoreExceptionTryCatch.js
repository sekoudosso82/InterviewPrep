// import console = require("console");

// Task
// Write a Calculator class with a single method: 
// int power(int,int). The power method takes two integers, 
// n and p, as parameters and returns the integer result of n^p.
// If either n or p is negative, then the method must throw an
// exception with the message: n and p should be non-negative. 

class Calculator {
    //var
    // contructor
    // constructor(num, pow){
    //     this.num = num
    //     this.pow = pow
    // }
    // methods
    static power(n,p){
        try{
            if (n < 0) throw "n and p should be non-negative"
            if (p < 0) throw "n and p should be non-negative"
            // if ( p === 0 && n > 0) throw 1
            console.log(Math.pow(n, p));
            return Math.pow(n, p);
            
        } catch( error){
            // console.log(error)
            // console.log("n and p should be non-negative")
            return error
        }
     }
}
// calculator1 = new Calculator
Calculator.power(3,2)