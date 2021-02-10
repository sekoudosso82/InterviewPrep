

// You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:

// the crossword must contain exactly four words;
// these four words should form four pairwise intersections;
// all words must be written either left-to-right or top-to-bottom;
// the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.

// Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.

// Example

// For words = ["crossword", "square", "formation", "something"], the output should be
// crosswordFormation(words) = 6.

// The six crosswords can be formed as shown below:

// f                         f                             f
// o                     c r o s s w o r d     c r o s s w o r d
// c r o s s w o r d           r   o                   q     r
// m   q                     m   m                   u     m
// a   u            ;  s q u a r e          ;        a     a
// t   a                     t   t                   r     t
// i   r                     i   h             s o m e t h i n g
// s o m e t h i n g           o   i                         o
// n                         n   n                         n
//                             g

// c         s               s
// f o r m a t i o n       c     q               c         s
// o         m         r     u               r         o
// s q u a r e       f o r m a t i o n       o         m
// s         t    ;    s     r            ;  s q u a r e
// w         h         s o m e t h i n g     s         t
// o         i         w                     w         h
// r         n         o                   f o r m a t i o n
// d         g         r                     r         n
//                     d                     d         g

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string words

// An array of distinct strings, the words you need to use in your crossword.

// Guaranteed constraints:
// words.length = 4,
// 3 ≤ words[i].length < 15.

// [output] integer
//     The number of ways to make a correct crossword of the desired formation.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
// console.log("This prints to the console when you Run Tests");
// return "Hello, " + name;
// }

/* eslint-disable max-depth */
/* eslint-disable complexity */
export function crosswordFormation(words: string[]): number {
    let s = 0;
  
    // loop all for 1st word
    for (let i = 0; i < 4; i++) {
      // loop all for 2nd word
      for (let j = 0; j < 4; j++) {
        // not same as 1st
        if (i === j) continue;
  
        // loop chars of 1st
        for (let k = 0; k < words[i].length; k++) {
          // loop chars of 2nd
          for (let p = 0; p < words[j].length; p++) {
            // chars of 1st and 2nd not equal
            if (words[i][k] !== words[j][p]) continue;
  
            // loop all for 3rd
            for (let u = 0; u < 4; u++) {
              // not same as 1st or 2nd
              if (i === u || j === u) continue;
  
              // 2 spaces between words
              for (let t = p + 2; t < words[j].length; t++) {
                // loop 3rd
                for (let e = 0; e < words[u].length; e++) {
                  // chars not equal
                  if (words[j][t] !== words[u][e]) continue;
  
                  // loop all for 4th
                  for (let w = 0; w < 4; w++) {
                    // not same as 1st, 2nd or 3rd
                    if (i === w || j === w || u === w) continue;
  
                    // 2 spaces between words
                    for (let d = k + 2; d < words[i].length; d++) {
                      // loop 4th
                      for (let y = 0; y < words[w].length; y++) {
                        // check if chars
                        if (
                          words[i][d] === words[w][y] &&
                          words[u][e + d - k] !== undefined &&
                          words[u][e + d - k] === words[w][y + t - p]
                        ) {
                          s++;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return s;
  }
  
  export function crosswordFormationV2(words: string[]): number {
    let count = 0;
    // loop all
    for (let i = 0; i < 4; i++) {
      // loop first
      for (let w1 = 0; w1 < words[i].length - 1; w1++) {
        // loop all
        for (let j = 0; j < 4; j++) {
          // not same as first
          if (j === i) continue;
          // loop second
          for (let w2 = 1; w2 < words[j].length; w2++) {
            // chars not equal
            if (words[i][w1] !== words[j][w2]) continue;
  
            for (let b1 = 0; b1 < w2 - 1; b1++) {
              // loop all
              for (let k = 0; k < 4; k++) {
                // not same as first and second
                if (k === i || k === j) continue;
  
                if (w2 - b1 >= words[6 - i - j - k].length) continue;
  
                for (let c1 = 0; c1 < words[k].length - 1; c1++) {
                  // chars not equal
                  if (words[k][c1] !== words[j][b1]) continue;
  
                  for (let c2 = c1 + 2; c2 < words[k].length; c2++) {
                    const a2 = w1 + (c2 - c1);
                    // does not fit
                    if (a2 >= words[i].length) continue;
                    for (let d1 = 0; d1 < words[6 - i - j - k].length; d1++) {
                      if (words[6 - i - j - k][d1] !== words[k][c2]) continue;
                      const d2 = d1 + (w2 - b1);
                      if (d2 >= words[6 - i - j - k].length) break;
                      if (words[i][a2] !== words[6 - i - j - k][d2]) continue;
                      count++;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return count;
  }
