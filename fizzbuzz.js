/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for (let i=1; i<n+1; i++){
        
        if (i%5===0 && i%3 === 0 ){
            console.log('FizzBuzz')
            
        }else if (i%3===0 && i%5!==0){
            console.log('Fizz')
        }else if (i%3 !==0 && i%5===0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}