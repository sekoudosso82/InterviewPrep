// Context
// Given a 2D Array, A: 
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// We define an hourglass in A to be a subset 
// of values with indices falling in this pattern 
// in A's graphical representation:
// a b c
//   d
// e f g

// There are 16 hourglasses in A, and an hourglass 
// sum is the sum of an hourglass' values.

// Task
// Calculate the hourglass sum for every hourglass in A, 
// then print the maximum hourglass sum.

// Input Format

// There are 6 lines of input, where each line contains 
// space-separated integers describing 2D Array A; every 
// value in A will be in the inclusive range of 9 to 9.

function main() {
    // console.log('arr[h-2][v-2]',arr[h-2][v-2],'','arr[h-1][v-2]',arr[h-1][v-2],'','arr[h][v-2]',arr[h][v-2])
    // console.log('l1', l1)
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    // console.log(arr.length)
    let subArr;
    let max = -69
    let sum = 0
    for (let h = 0; h<4 ; h++){

        for (let v = 0; v<4 ; v++){
                sum  = arr[h][v]+  arr[h][v+1]   +arr[h][v+2] +
                                +  arr[h+1][v+1] +
                    arr[h+2][v]+ arr[h+2][v+1] +arr[h+2][v+2]
            // console.log('l3', l3)
            
            if (sum > max){
                max = sum
            }   
        }
    }
    console.log(max)
}function main() {
            // console.log('arr[h-2][v-2]',arr[h-2][v-2],'','arr[h-1][v-2]',arr[h-1][v-2],'','arr[h][v-2]',arr[h][v-2])
            // console.log('l1', l1)
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    // console.log(arr.length)
    let subArr;
    let max = -69
    let sum = 0
    for (let h = 0; h<4 ; h++){
        
        for (let v = 0; v<4 ; v++){
                sum  = arr[h][v]+  arr[h][v+1]   +arr[h][v+2] +
                                +  arr[h+1][v+1] +
                      arr[h+2][v]+ arr[h+2][v+1] +arr[h+2][v+2]
            // console.log('l3', l3)
            
        if (sum > max){
            max = sum
        }   
        }
    }
    console.log(max)  
}