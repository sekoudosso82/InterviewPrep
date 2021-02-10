// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

// Example

//     For symbol = '5', the output should be
//     characterParity(symbol) = "odd";
//     For symbol = '8', the output should be
//     characterParity(symbol) = "even";
//     For symbol = 'q', the output should be
//     characterParity(symbol) = "not a digit".

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] char symbol

//     A symbol to check.

//     Guaranteed constraints:
//     symbol is guaranteed to be a UTF-8 symbol.

//     [output] string  

export function characterParity(symbol: string): string {
    const n = parseInt(symbol, 10);
    if (isNaN(n)) return 'not a digit';
    return n % 2 ? 'odd' : 'even';
  }
  
  export function characterParityV2(symbol: string): string {
    const n = parseInt(symbol, 10);
    return isNaN(n) ? `not a digit` : n & 1 ? `odd` : `even`;
  }
