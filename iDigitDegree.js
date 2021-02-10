

// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

// Example

//     For n = 5, the output should be
//     digitDegree(n) = 0;
//     For n = 100, the output should be
//     digitDegree(n) = 1.
//     1 + 0 + 0 = 1.
//     For n = 91, the output should be
//     digitDegree(n) = 2.
//     9 + 1 = 10 -> 1 + 0 = 1.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] integer n

//     Guaranteed constraints:
//     5 ≤ n ≤ 109.

//     [output] integer

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function digitDegree(n: number): number {
    let c = 0;
    let s = n.toString();
    while (s.length > 1) {
      s = s.split('').reduce((x, y) => (Number(x) + Number(y)).toString());
      c++;
    }
    return c;
  }
  
  export function digitDegreeV2(n: number): number {
    const sum = (value: number): number => {
      let s = 0;
      while (value) {
        s += value % 10;
        value = Math.floor(value / 10);
      }
      return s;
    };
    let curr = n;
    let i = 0;
    while (curr > 10) {
      curr = sum(curr);
      i++;
    }
    return i;
  }
