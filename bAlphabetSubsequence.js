

// Check whether the given string is a subsequence of the plaintext alphabet.

// Example

//     For s = "effg", the output should be
//     alphabetSubsequence(s) = false;
//     For s = "cdce", the output should be
//     alphabetSubsequence(s) = false;
//     For s = "ace", the output should be
//     alphabetSubsequence(s) = true;
//     For s = "bxz", the output should be
//     alphabetSubsequence(s) = true.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string s

//     Guaranteed constraints:
//     2 ≤ s.length ≤ 15.

//     [output] boolean
//         true if the given string is a subsequence of the alphabet, false otherwise.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function alphabetSubsequence(s: string): boolean {
    let prev = s[0];
    return s
      .split('')
      .slice(1)
      .every((c) => {
        if (prev >= c) return false;
        prev = c;
        return true;
      });
}
  
export function alphabetSubsequenceV2(s: string): boolean {
    return s === [...new Set(s)].sort().join('');
}
