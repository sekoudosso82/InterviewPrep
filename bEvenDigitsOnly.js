

// Check if all digits of the given integer are even.

// Example

//     For n = 248622, the output should be
//     evenDigitsOnly(n) = true;
//     For n = 642386, the output should be
//     evenDigitsOnly(n) = false.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] integer n

//     Guaranteed constraints:
//     1 ≤ n ≤ 109.

//     [output] boolean
//         true if all digits of n are even, false otherwise.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function evenDigitsOnly(n: number): boolean {
    return !`${n}`.split('').some((x) => parseInt(x, 10) % 2 !== 0);
  }
  
  export function evenDigitsOnlyV2(n: number): boolean {
    return !`${n}`.match(/[13579]/);
  }
  
  export function evenDigitsOnlyV3(n: number): boolean {
    const num = `${n}`;
    const len = num.length;
    for (let i = 0; i < len; i++) {
      if (parseInt(num[i], 10) % 2 !== 0) return false;
    }
    return true;
  }