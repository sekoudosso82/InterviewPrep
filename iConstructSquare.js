// Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

// If there is no solution, return -1.

// Example

//     For s = "ab", the output should be
//     constructSquare(s) = 81.
//     The largest 2-digit square number with different digits is 81.
//     For s = "zzz", the output should be
//     constructSquare(s) = -1.
//     There are no 3-digit square numbers with identical digits.
//     For s = "aba", the output should be
//     constructSquare(s) = 900.
//     It can be obtained after reordering the initial string into "baa" and replacing "a" with 0 and "b" with 9.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string s

//     Guaranteed constraints:
//     1 ≤ s.length < 10.

//     [output] integer  

export function constructSquare(s: string): number {
    const calcFrequency = (str: string) => {
      const f: {[key: string]: number} = str
        .split('')
        .reduce((a: {[key: string]: number}, c) => {
          a[c] = (a[c] || 0) + 1;
          return a;
        }, {});
      return Object.values(f).sort().join('');
    };
  
    const sf = calcFrequency(s);
    const max = 10 ** s.length - 1;
    const lower = Math.sqrt(max / 10);
    const upper = Math.floor(Math.sqrt(max));
    for (let n = upper; n > lower; --n) {
      const curr = n * n;
      if (sf === calcFrequency(curr.toString())) return curr;
    }
    return -1;
  }
