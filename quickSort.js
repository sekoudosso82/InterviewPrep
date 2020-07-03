
// # Implement a quicksort
// items = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19]


function quickSort(dataset, first, last){
    if (first < last){
        // # calculate the split point
        let pivotIdx = partition(dataset, first, last)

        // # now sort the two partitions
        quickSort(dataset, first, pivotIdx-1)
        quickSort(dataset, pivotIdx+1, last)
    }

}


function partition(datavalues, first, last){
    // # choose the first item as the pivot value
    let pivotvalue = datavalues[first]
    // # establish the upper and lower indexes
    let lower = first + 1
    let upper = last

    // # start searching for the crossing point
    let done = false
    while (!done){
        // # advance the lower index
        while (lower <= upper && datavalues[lower] <= pivotvalue){ lower += 1 }
        // # advance the upper index
        while (datavalues[upper] >= pivotvalue && upper >= lower) {  upper -= 1 }
        // # if the two indexes cross, we have found the split point
        if (upper < lower) { done = true } 
        else{
            // # exchange the two values
            let temp = datavalues[lower]
            datavalues[lower] = datavalues[upper]
            datavalues[upper] = temp
        }
    }

    // # when the split point is found, exchange the pivot value
    let temp = datavalues[first]
    datavalues[first] = datavalues[upper]
    datavalues[upper] = temp

    // # return the split point index
    return upper
}

// # test the merge sort with data
console.log(items)
quickSort(items, 0, items.length - 1)
console.log(items)
