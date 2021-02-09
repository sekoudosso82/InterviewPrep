

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

//     For a = [1, 2, 3] and b = [1, 2, 3], the output should be
//     areSimilar(a, b) = true.

//     The arrays are equal, no need to swap any elements.

//     For a = [1, 2, 3] and b = [2, 1, 3], the output should be
//     areSimilar(a, b) = true.

//     We can obtain b from a by swapping 2 and 1 in b.

//     For a = [1, 2, 2] and b = [2, 1, 1], the output should be
//     areSimilar(a, b) = false.

//     Any swap of any two elements either in a or in b won't make a and b equal.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.integer a

//     Array of integers.

//     Guaranteed constraints:
//     3 ≤ a.length ≤ 105,
//     1 ≤ a[i] ≤ 1000.

//     [input] array.integer b

//     Array of integers of the same length as a.

//     Guaranteed constraints:
//     b.length = a.length,
//     1 ≤ b[i] ≤ 1000.

//     [output] boolean
//         true if a and b are similar, false otherwise.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }  

export function areSimilar(a: number[], b: number[]): boolean {
    const ad = a.filter((v, i) => v !== b[i]);
    const bd = b.filter((v, i) => v !== a[i]);
    return ad.length === 0 || (ad.length === 2 && ad.join('') === bd.reverse().join(''));
}
  
export function areSimilarV2(a: number[], b: number[]): boolean {
    const arr = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) arr.push(a[i], b[i]);
    }
    return arr.length <= 4 && new Set(arr).size <= 2;
}
  
export function areSimilarV3(a: number[], b: number[]): boolean {
    let swaps = 0;
    const len = a.length;
    for (let i = 0; i < len; i++) {
      if (a[i] !== b[i]) {
        swaps++;
        let j = i;
        while (j < len) {
          if (a[i] === b[j] && a[j] === b[i]) {
            [b[i], b[j]] = [b[j], b[i]];
            break;
          }
          j++;
        }
  
        if (swaps > 1) {
          return false;
        }
      }
    }
    return true;
}
  
export function areSimilarV4(a: number[], b: number[]): boolean {
    let t = 0;
    let i = 0;
    for (const x in a) {
      if (a[x] ^ b[x]) {
        ++i;
        t ^= a[x] ^ b[x];
      }
    }
  
    if (i === 2 || i == 0) return !t;
    return false;
}

