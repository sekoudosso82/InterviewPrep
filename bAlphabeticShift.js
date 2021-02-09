

// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string inputString

//     A non-empty string consisting of lowercase English characters.

//     Guaranteed constraints:
//     1 ≤ inputString.length ≤ 1000.

//     [output] string
//         The resulting string after replacing each of its characters.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function alphabeticShift(inputString: string): string {
    return inputString
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0) + 1;
        return String.fromCharCode(code > 122 ? 97 : code);
      })
      .join('');
}
  
export function alphabeticShiftV2(inputString: string): string {
    const c = 'abcdefghijklmnopqrstuvwxyza';
    return inputString.replace(/./g, (x) => c[c.indexOf(x) + 1]);
}
