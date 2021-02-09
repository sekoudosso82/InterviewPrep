

// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.string inputArray

//     A non-empty array.

//     Guaranteed constraints:
//     1 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 10.

//     [output] array.string
//         Array of the longest strings, stored in the same order as in the inputArray.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function allLongestStrings(inputArray: string[]): string[] {
    let longest: string[] = [];
    let maxLen = 0;
    for (let i = 0; i < inputArray.length; i++) {
      const currLen = inputArray[i].length;
      if (maxLen < currLen) {
        longest = [inputArray[i]];
        maxLen = currLen;
      } else if (maxLen === currLen) {
        longest.push(inputArray[i]);
      }
    }
    return longest;
  }
  
  export function allLongestStringsV2(inputArray: string[]): string[] {
    const maxSize = Math.max(...inputArray.map((x) => x.length));
    return inputArray.filter((x) => x.length === maxSize);
  }
