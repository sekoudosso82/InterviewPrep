function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    let result = ''
    // for (let i = 0 ; i < arr.length ; i++ ){
    //     result += arr[arr.length-1-i]+' '
    // }
    for (let i = arr.length-1 ;i >= 0 ;  i-- ){
        result += arr[i]+' '
    }
    console.log(result)
}