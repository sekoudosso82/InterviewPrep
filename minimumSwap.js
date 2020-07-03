function minimumSwaps(arr) {
    let swaps = 0;
    // Iterate arr
    for(let i = 0; i < arr.length - 1; i++){
        //Is the current element at the wrong place?
        if(arr[i] !== i+1) {
            //Substitute the element that has to be here with the current element
            // console.log('lastindexOf',arr.lastIndexOf(i+1))
            arr[arr.lastIndexOf(i+1)] = arr[i];
            //Increment
            swaps++;
        }
    }
    // Return
    return swaps; 
}