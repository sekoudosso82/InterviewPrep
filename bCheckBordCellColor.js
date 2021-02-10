// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

//     For cell1 = "A1" and cell2 = "C3", the output should be
//     chessBoardCellColor(cell1, cell2) = true.

//     For cell1 = "A1" and cell2 = "H3", the output should be
//     chessBoardCellColor(cell1, cell2) = false.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string cell1

//     Guaranteed constraints:
//     cell1.length = 2,
//     'A' ≤ cell1[0] ≤ 'H',
//     1 ≤ cell1[1] ≤ 8.

//     [input] string cell2

//     Guaranteed constraints:
//     cell2.length = 2,
//     'A' ≤ cell2[0] ≤ 'H',
//     1 ≤ cell2[1] ≤ 8.

//     [output] boolean
//         true if both cells have the same color, false otherwise.

export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const isDark = (cell: string) => {
      return cell[0].charCodeAt(0) % 2 === parseInt(cell[1], 10) % 2;
    };
    return isDark(cell1) === isDark(cell2);
  }
  
  export function chessBoardCellColorV2(cell1: string, cell2: string): boolean {
    return (
      (cell1.charCodeAt(0) + Number(cell1[1]) + cell2.charCodeAt(0) + Number(cell2[1])) %
        2 ==
      0
    );
  }