

// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

// Check out the image below for better understanding:

// picture

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.integer inputArray

//     Non-empty array of positive integers.

//     Guaranteed constraints:
//     2 ≤ inputArray.length ≤ 1000,
//     1 ≤ inputArray[i] ≤ 1000.

//     [output] integer
//         The desired length.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function avoidObstacles(inputArray: number[]): number {
    for (let i = 1; ; i++) {
      if (inputArray.every((x) => x % i)) return i;
    }
  }
  
  export function avoidObstaclesV2(inputArray: number[]): number {
    let jump = 2;
    const compare = (val: number) => val % jump === 0;
    while (inputArray.some(compare)) {
      jump++;
    }
    return jump;
  }
  
  export function avoidObstaclesV3(inputArray: number[]): number {
    let jump = 2;
    let found = false;
    const len = inputArray.length;
    while (!found) {
      for (let i = 0; i < len; i++) {
        if (inputArray[i] % jump === 0) {
          jump++;
          break;
        }
        if (i === len - 1) {
          found = true;
        }
      }
    }
    return jump;
  }