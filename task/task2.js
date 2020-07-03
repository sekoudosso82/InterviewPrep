// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // let totalCoin = N = A length. 
    // coin should be (1 or 0). 
    
    let N = A.length
    
    let counter = 0
    
    for ( let i = 0 ; i < N ; i++ ) {
        if (A[i] === A[i+1] && A[i]===1){
            A[i+1]=0
            counter += 1
        }
        if (A[i] === A[i+1] && A[i]===0){
            A[i+1]=1
            counter += 1
        }
        
    }
    
    if ((N%2 !== 0) && (counter > 0) ){
     counter -= 1
    }
    
    return counter
}
