

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.integer inputArray

//     Guaranteed constraints:
//     3 ≤ inputArray.length ≤ 10,
//     -15 ≤ inputArray[i] ≤ 15.

//     [output] integer
//         The maximal absolute difference.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    return inputArray.slice(1).reduce((acc, curr, i) => {
      const diff = Math.abs(curr - inputArray[i]);
      return diff > acc ? diff : acc;
    }, 0);
  }
  
  export function arrayMaximalAdjacentDifferenceV2(inputArray: number[]): number {
    return Math.max(...inputArray.slice(1).map((x, i) => Math.abs(x - inputArray[i])));
  }
