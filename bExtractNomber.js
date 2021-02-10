

// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

// Example

// For a = 2, b = 7, and c = 2, the output should be
// extraNumber(a, b, c) = 7.

// The two equal numbers are a and c. The third number (b) equals 7, which is the answer.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] integer a

//     Guaranteed constraints:
//     1 ≤ a ≤ 109.

//     [input] integer b

//     Guaranteed constraints:
//     1 ≤ b ≤ 109.

//     [input] integer c

//     Guaranteed constraints:
//     1 ≤ c ≤ 109.

//     [output] integer

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function extraNumber(a: number, b: number, c: number): number {
    if (a === b) return c;
    if (a === c) return b;
    return a;
  }
