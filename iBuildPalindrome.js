// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string st

//     A string consisting of lowercase English letters.

//     Guaranteed constraints:
//     3 ≤ st.length ≤ 10.

//     [output] string

export function buildPalindrome(st: string): string {
    const isPalindrome = (s: string[]) => s.join('') === s.reverse().join('');
    const split = st.split('');
    const len = split.length;
    for (let i = 0; i < len; i++) {
      if (isPalindrome([...split])) break;
      split.splice(len, 0, split[i]);
    }
    return split.join('');
  }