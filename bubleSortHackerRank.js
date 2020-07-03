function countSwaps(a) {
    let n = a.length
    let counter = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                // swap(a[j], a[j + 1]);
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                counter += 1
            }
        }  
    }
    console.log(`Array is sorted in ${counter} swaps.`)
    console.log('First Element:', a[0])
    console.log('Last Element:', a[n-1])

    // or 

    // let swaps = 0;
    // const n = a.length;
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n - 1; j++) {
    //         if (a[j] > a[j + 1]) {
    //             [a[j], a[j+1]] = [a[j+1], a[j]];
    //             swaps++;
    //         }
    //     }
    // }

    // console.log(`Array is sorted in ${swaps} swaps.`);
    // console.log(`First Element: ${a[0]}`) 
    // console.log(`Last Element: ${a[n - 1]}`) 
}