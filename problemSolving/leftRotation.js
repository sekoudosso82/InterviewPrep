// A left rotation operation on an array of size shifts each of the 
// array's elements unit to the left. For example, if left rotations 
// are performed on array , then the array would become.

// Given an array of integers and a number, , perform left rotations 
// on the array. Then print the updated array as a single line of 
// space-separated integers.

function main() {
    const nd = readLine().split(' ');
    const n = parseInt(nd[0], 10);
    const d = parseInt(nd[1], 10);
    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    // console.log(n)
    // console.log(d)
    let arr = []
    for (let i = 1 ; i < n+1 ; i++){
        arr.push(i)
    }
    // console.log(arr)
    let copyArr = arr
    // console.log('initial copy', copyArr)  
    for (let i = 0 ; i < d ; i++){
        let temp = copyArr.shift()

                // console.log('temp', temp)
                // console.log('after pop copyArr', copyArr) 

        copyArr.push(temp)

                // console.log('update copyArr', copyArr) 
    }
    // return copyArr
    console.log(...copyArr)
    // for (let i = 0 ; i < copyArr.length ; i++){
    //     console.log(copyArr[i])
    // }

}


function leftRotation(a,n,d) {
    var array = [];
    for (var i = 0; i < n; i++)
    {
        array[(i + (n-d)) % n] = parseInt(a[i]);
    }
    return array;
}

function main() {
var n_temp = readLine().split(' ');
var n = parseInt(n_temp[0]);
var d = parseInt(n_temp[1]);
a = readLine().split(' ');
a = a.map(Number);
var result = leftRotation(a,n,d);
console.log(result.join(" "));
}
