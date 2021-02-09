

// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

// Example

//     For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
//     areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
//     For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
//     areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
//     For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
//     areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] integer yourLeft

//     A non-negative integer representing the heaviest weight you can lift with your left arm.

//     Guaranteed constraints:
//     0 ≤ yourLeft ≤ 20.

//     [input] integer yourRight

//     A non-negative integer representing the heaviest weight you can lift with your right arm.

//     Guaranteed constraints:
//     0 ≤ yourRight ≤ 20.

//     [input] integer friendsLeft

//     A non-negative integer representing the heaviest weight your friend can lift with his or her left arm.

//     Guaranteed constraints:
//     0 ≤ friendsLeft ≤ 20.

//     [input] integer friendsRight

//     A non-negative integer representing the heaviest weight your friend can lift with his or her right arm.

//     Guaranteed constraints:
//     0 ≤ friendsRight ≤ 20.

//     [output] boolean
//         true if you and your friend are equally strong, false otherwise.

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

export function areEquallyStrong(
    yourLeft: number,
    yourRight: number,
    friendsLeft: number,
    friendsRight: number,
  ): boolean {
    const your = [yourLeft, yourRight].sort((a, b) => a - b);
    const friend = [friendsLeft, friendsRight].sort((a, b) => a - b);
    return your[0] === friend[0] && your[1] === friend[1];
  }
  
  export function areEquallyStrongV2(
    yourLeft: number,
    yourRight: number,
    friendsLeft: number,
    friendsRight: number,
  ): boolean {
    return (
      yourLeft + yourRight === friendsLeft + friendsRight &&
      (yourLeft === friendsLeft || yourLeft === friendsRight)
    );
  }
  
  export function areEquallyStrongV3(
    yourLeft: number,
    yourRight: number,
    friendsLeft: number,
    friendsRight: number,
  ): boolean {
    const me = [yourLeft, yourRight].sort().join('');
    const friend = [friendsLeft, friendsRight].sort().join('');
    return me === friend;
  }