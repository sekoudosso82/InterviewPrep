

// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

// Example

// For

// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]

// the output should be
// differentSquares(matrix) = 6.

// Here are all 6 different 2 × 2 squares:

//     1 2
//     2 2
//     2 1
//     2 2
//     2 2
//     2 2
//     2 2
//     1 2
//     2 2
//     2 3
//     2 3
//     2 1

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.array.integer matrix

//     Guaranteed constraints:
//     1 ≤ matrix.length ≤ 100,
//     1 ≤ matrix[i].length ≤ 100,
//     0 ≤ matrix[i][j] ≤ 9.

//     [output] integer
//         The number of different 2 × 2 squares in matrix.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function differentSquares(matrix: number[][]): number {
    const s: {[key: string]: boolean} = {};
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[i].length; j++) {
        s[
          `${matrix[i][j]},${matrix[i][j - 1]},${matrix[i - 1][j]},${matrix[i - 1][j - 1]}`
        ] = true;
      }
    }
  
    return Object.keys(s).length;
  }
  
  export function differentSquaresV2(matrix: number[][]): number {
    const s = new Set();
    for (let i = 0; i < matrix.length - 1; i++) {
      for (let j = 0; j < matrix[0].length - 1; j++) {
        const hash =
          matrix[i][j] +
          10 * matrix[i][j + 1] +
          100 * matrix[i + 1][j] +
          1000 * matrix[i + 1][j + 1];
        s.add(hash);
      }
    }
    return s.size;
  }