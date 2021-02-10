

// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

// Given an array arr, swap its first and last elements and return the resulting array.

// Example

// For arr = [1, 2, 3, 4, 5], the output should be
// firstReverseTry(arr) = [5, 2, 3, 4, 1].

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.integer arr

//     Guaranteed constraints:
//     0 ≤ arr.length ≤ 50,
//     -104 ≤ arr[i] ≤ 104.

//     [output] array.integer
//         Array arr with its first and its last elements swapped.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function firstReverseTry(arr: number[]): number[] {
    if (arr.length < 2) return arr;
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }
  
  export function firstReverseTryV2(arr: number[]): number[] {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr[0] === undefined ? [] : arr;
  }
  
  export function firstReverseTryV3(arr: number[]): number[] {
    if (arr.length < 2) return arr;
    return [arr[arr.length - 1]].concat(arr.slice(1, arr.length - 1)).concat(arr[0]);
  }