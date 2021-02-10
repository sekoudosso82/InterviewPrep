

// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string s

//     A string of lowercase English letters.

//     Guaranteed constraints:
//     3 ≤ s.length ≤ 1000.

//     [output] integer

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function differentSymbolsNaiveV2(s: string): number {
    return new Set(s).size;
  }
  
  export function differentSymbolsNaive(s: string): number {
    return Object.keys(
      s
        .split('')
        .reduce((acc: {[key: string]: boolean}, curr) => ((acc[curr] = true), acc), {}),
    ).length;
  }
