/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// function fizzBuzz(n) {
//     // Write your code here
//     for (let i=1; i<n+1; i++){
        
//         if (i%5===0 && i%3 === 0 ){
//             console.log('FizzBuzz')
            
//         }else if (i%3===0 && i%5!==0){
//             console.log('Fizz')
//         }else if (i%3 !==0 && i%5===0){
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }
let tempArr = [1,2,3,4,5,6]
let pairArr = []
while (tempArr.length>1){
        let subArr = []
        let firstShift = tempArr.shift();
        subArr.push(firstShift)
        let seconfShift = tempArr.shift();
        subArr.push(seconfShift)
        pairArr.push(subArr)

}

console.log(pairArr.length)

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

