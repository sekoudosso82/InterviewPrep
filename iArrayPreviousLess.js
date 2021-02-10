

// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

// Example

// For items = [3, 5, 2, 4, 5], the output should be
// arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.integer items

//     Non-empty array of positive integers.

//     Guaranteed constraints:
//     3 ≤ items.length ≤ 15,
//     1 ≤ items[i] ≤ 200.

//     [output] array.integer
//         Array containing answer values computed as described above.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function arrayPreviousLess(items: number[]): number[] {
    return items.map(
      (val, i) =>
        items
          .slice(0, i)
          .reverse()
          .find((v) => v < val) || -1,
    );
  }
  
  export function arrayPreviousLessV2(items: number[]): number[] {
    return items.map((v, i) => {
      for (let j = i - 1; j >= 0; j--) {
        if (items[j] < v) return items[j];
      }
      return -1;
    });
  }
