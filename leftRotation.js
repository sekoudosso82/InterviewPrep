// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

function leftRotation (){
    var arr = prompt("Please enter arr size", "");
    var num = prompt("Please enter number of rotation you wish", "");
    let startArr = []
    for (let i=0; i< arr; i++){
        startArr.push(i+1)
    }
    for (let i=0; i< num; i++){
        let temp = startArr.shift()
        startArr.push(temp)
    }
    return startArr
}