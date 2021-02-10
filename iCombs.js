// Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

// It is guaranteed that there is at least one tooth at each end of the comb.
// It is also guaranteed that the total length of two strings is smaller than 32.
// Note, that the combs can not be rotated/reversed.

// Example

// For comb1 = "*..*" and comb2 = "*.*", the output should be
// combs(comb1, comb2) = 5.

// Although it is possible to place the combs like on the first picture, the best way to do this is either picture 2 or picture 3.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string comb1

//     A comb is represented as a string. If there is an asterisk ('*') in the ith position, there is a tooth there. Otherwise there is a dot ('.'), which means there is a missing tooth on the comb.

//     Guaranteed constraints:
//     3 ≤ comb1.length ≤ 8.

//     [input] string comb2

//     The second comb is represented in the same way as the first one.

//     Guaranteed constraints:
//     1 ≤ comb2.length ≤ 5.

//     [output] integer
//         The minimum length of a purse Miss X needs.

export function combs(comb1: string, comb2: string): number {
    const a = parseInt(
      comb1.replace(/./g, (x) => (x === '*' ? '1' : '0')),
      2,
    );
    const b = parseInt(
      comb2.replace(/./g, (x) => (x === '*' ? '1' : '0')),
      2,
    );
  
    let i = 0;
    let j = 0;
    while ((a << i) & b) i++;
    while ((b << j) & a) j++;
    return Math.min(
      Math.max(comb1.length + i, comb2.length),
      Math.max(comb2.length + j, comb1.length),
    );
  }
  
  export function combsV2(comb1: string, comb2: string): number {
    const calc = (c1: string, c2: string): number => {
      while ([...c2].some((x, i) => x == c1[i] && x == '*')) c2 = `.${c2}`;
      return Math.max(c1.length, c2.length);
    };
    return Math.min(calc(comb1, comb2), calc(comb2, comb1));
  }