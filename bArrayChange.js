

// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.integer inputArray

//     Guaranteed constraints:
//     3 ≤ inputArray.length ≤ 105,
//     -105 ≤ inputArray[i] ≤ 105.

//     [output] integer
//         The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
//         It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function arrayChange(inputArray: number[]): number {
    let sum = 0;
    for (let i = 1; i < inputArray.length; i++) {
      const diff = inputArray[i - 1] - inputArray[i] + 1;
      if (diff > 0) {
        sum += diff;
        inputArray[i] += diff;
      }
    }
    return sum;
  }
