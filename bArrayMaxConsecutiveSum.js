

// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

//     2 + 3 = 5;
//     3 + 5 = 8;
//     5 + 1 = 6;
//     1 + 6 = 7.
//     Thus, the answer is 8.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.integer inputArray

//     Array of positive integers.

//     Guaranteed constraints:
//     3 ≤ inputArray.length ≤ 105,
//     1 ≤ inputArray[i] ≤ 1000.

//     [input] integer k

//     An integer (not greater than the length of inputArray).

//     Guaranteed constraints:
//     1 ≤ k ≤ inputArray.length.

//     [output] integer
//         The maximal possible sum.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let max = inputArray.slice(0, k).reduce((acc, curr) => acc + curr, 0);
    let prev = max;
    for (let i = k; i < inputArray.length; i++) {
      prev = prev + inputArray[i] - inputArray[i - k];
      max = prev > max ? prev : max;
    }
    return max;
  }
