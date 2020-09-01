// Implement a quicksort

let items = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19]

function quickSort(dataset, first, last){
    if (first < last){
        let pivotIdx = partition(dataset, first, last) // calculate the split point
        quickSort(dataset, first, pivotIdx-1) // now sort the two partitions
        quickSort(dataset, pivotIdx+1, last) // now sort the two partitions
    }
}
function partition(data, first, last){
    
    let pivot = data[first] // choose the first item as the pivot value
    let lower = first + 1 // establish the lower indexes
    let upper = last // establish the upper indexes
    let done = false // start searching for the crossing point
    while (!done){

        while (((lower < upper)||(lower === upper)) && ((data[lower] < pivot)||(data[lower] === pivot))){
            lower += 1 // advance the lower index
        }

        while (((data[upper] > pivot)||(data[upper] === pivot)) && ((upper > lower)||(upper === lower))){
            upper -= 1 // advance the upper index
        }

        if (upper < lower){
            done = true // if the two indexes cross, we have found the split point
        }
        else
        {
            let temp = data[lower] // exchange the two values
            data[lower] = data[upper]
            data[upper] = temp
        }
    }
    
    let temp = data[first] // when the split point is found, exchange the pivot value
    data[first] = data[upper]
    data[upper] = temp

    return upper // return the split point index

}

console.log(items) 
quickSort(items, 0, items.length-1) // test the merge sort with data
console.log(items)

let test2=[15, 3, 2, 1, 9, 5, 7, 8, 6]
console.log(test2) 
quickSort(test2, 0, test2.length-1) // test the merge sort with data
console.log(test2)

