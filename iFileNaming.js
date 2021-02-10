

// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.string names

//     Guaranteed constraints:
//     5 ≤ names.length ≤ 1000,
//     1 ≤ names[i].length ≤ 15.

//     [output] array.string

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function fileNaming(names: string[]): string[] {
    const map: {[key: string]: number} = {};
    return names.map((name) => {
      let newName = name;
      while (map[newName]) {
        newName = `${name}(${map[name]++})`;
      }
      map[newName] = 1;
      return newName;
    });
  }
  
  export function fileNamingV2(names: string[]): string[] {
    const newArr = [];
    for (let i = 0; i < names.length; i++) {
      let count = 0;
      const tmp = names[i];
      while (newArr.indexOf(names[i]) > -1) {
        count++;
        names[i] = `${tmp}(${count})`;
      }
      newArr.push(names[i]);
    }
    return newArr;
  }
