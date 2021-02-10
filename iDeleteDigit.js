

// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

//     For n = 152, the output should be
//     deleteDigit(n) = 52;
//     For n = 1001, the output should be
//     deleteDigit(n) = 101.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] integer n

//     Guaranteed constraints:
//     10 ≤ n ≤ 106.

//     [output] integer

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function deleteDigit(n: number): number {
    const s = n.toString();
    return Math.max(
      ...Array(s.length)
        .fill(0)
        .map((_v, i) => parseInt(s.slice(0, i) + s.slice(i + 1), 10)),
    );
  }
