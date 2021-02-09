

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]

// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.string picture

//     A non-empty array of non-empty equal-length strings.

//     Guaranteed constraints:
//     1 ≤ picture.length ≤ 100,
//     1 ≤ picture[i].length ≤ 100.

//     [output] array.string
//         The same matrix of characters, framed with a border of asterisks of width 1.

export function addBorder(picture: string[]): string[] {
    const outer = '*'.repeat(picture[0].length + 2);
    return [outer, ...picture.map((str) => `*${str}*`), outer];
  }
  
  export function addBorderV2(picture: string[]): string[] {
    let arr = [...picture];
  
    const outer = '*'.repeat(arr[0].length + 2);
    arr = arr.map((str) => `*${str}*`);
    arr.push(outer);
    arr.unshift(outer);
    return arr;
  }
  
  export function addBorderV3(picture: string[]): string[] {
    let e;
    return [(e = '*'.repeat(picture[0].length + 2))].concat(
      picture.map((i) => `*${i}*`),
      e,
    );
  }