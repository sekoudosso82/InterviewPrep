

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.integer inputArray

//     An array of integers containing at least two elements.

//     Guaranteed constraints:
//     2 ≤ inputArray.length ≤ 10,
//     -1000 ≤ inputArray[i] ≤ 1000.

//     [output] integer
//         The largest product of adjacent elements.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function adjacentElementsProduct(inputArray: number[]): number {
    let max = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
      const current = inputArray[i] * inputArray[i + 1];
      if (current > max) max = current;
    }
    return max;
  }
  
  export function adjacentElementsProductV2(inputArray: number[]): number {
    return Math.max(...inputArray.slice(1).map((x, i) => x * inputArray[i]));
  }
  
  export function adjacentElementsProductV3(inputArray: number[]): number {
    let prod = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
      prod = Math.max(prod, inputArray[i] * inputArray[i + 1]);
    }
    return prod;
  }