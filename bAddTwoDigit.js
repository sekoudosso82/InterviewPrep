

// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// addTwoDigits(n) = 11.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] integer n

//     A positive two-digit integer.

//     Guaranteed constraints:
//     10 ≤ n ≤ 99.

//     [output] integer
//         The sum of the first and second digits of the input number.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function addTwoDigits(n: number): number {
    return (n % 10) + Math.floor(n / 10);
  }
  
  export function addTwoDigitsV2(n: number): number {
    return n
      .toString()
      .split('')
      .reduce((a, c) => a + Number(c), 0);
  }