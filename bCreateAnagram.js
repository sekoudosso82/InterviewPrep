

// You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

// Example

//     For s = "AABAA" and t = "BBAAA", the output should be
//     createAnagram(s, t) = 1;
//     For s = "OVGHK" and t = "RPGUC", the output should be
//     createAnagram(s, t) = 4.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string s

//     Guaranteed constraints:
//     5 ≤ s.length ≤ 35.

//     [input] string t

//     Guaranteed constraints:
//     t.length = s.length.

//     [output] integer
//         The minimum number of replacement operations needed to get an anagram of the string t from the string s.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }


export function createAnagram(s: string, t: string): number {
    for (const c of s) {
      t = t.replace(c, '');
    }
    return t.length;
  }
