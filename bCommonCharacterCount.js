// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string s1

//     A string consisting of lowercase English letters.

//     Guaranteed constraints:
//     1 ≤ s1.length < 15.

//     [input] string s2

//     A string consisting of lowercase English letters.

//     Guaranteed constraints:
//     1 ≤ s2.length < 15.

//     [output] integer  

export function commonCharacterCount(s1: string, s2: string): number {
    const str1 = [...s1];
    const str2 = [...s2];
    return str1.reduce((acc, char) => {
      const i = str2.findIndex((c) => char === c);
      if (i >= 0) {
        acc++;
        delete str2[i];
      }
      return acc;
    }, 0);
  }
  
  export function commonCharacterCountV2(s1: string, s2: string): number {
    for (let i = 0; i < s1.length; i++) {
      s2 = s2.replace(s1[i], '!');
    }
    return s2.replace(/[^!]/g, '').length;
  }
