

// Find the leftmost digit that occurs in a given string.

// Example

//     For inputString = "var_1__Int", the output should be
//     firstDigit(inputString) = '1';
//     For inputString = "q2q-q", the output should be
//     firstDigit(inputString) = '2';
//     For inputString = "0ss", the output should be
//     firstDigit(inputString) = '0'.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string inputString

//     A string containing at least one digit.

//     Guaranteed constraints:
//     3 ≤ inputString.length ≤ 10.

//     [output] char

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function firstDigit(inputString: string): string | undefined {
    return inputString.match(/\d/)?.shift() || '';
  }
  
  export function firstDigitV2(inputString: string): string {
    for (let i = 0; i < inputString.length; i++) {
      const num = parseInt(inputString[i], 10);
      if (num >= 0) {
        return inputString[i];
      }
    }
    return '';
  }