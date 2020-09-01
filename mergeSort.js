
// # Implement a merge sort with recursion

// let items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

function mergesort(dataset){
    
    if (dataset.length > 1){

        let mid = dataset.length  / 2
        let leftarr = dataset.slice(0, mid)
        let rightarr = dataset.slice(mid, dataset.length)

        // # recursively break down the arrays
        mergesort(leftarr)
        mergesort(rightarr)

        // # now perform the merging
        let i=0 // index into the left array
        let j=0 // index into the right array
        let k=0 // index into merged array

        // # while both arrays have content
        while (i < leftarr.length && j < rightarr.length) {
            if (leftarr[i] < rightarr[j]){
                dataset[k] = leftarr[i]
                i += 1
            }else{
                dataset[k] = rightarr[j]
                j += 1
            }
            k += 1
        }

        // # if the left array still has values, add them
        while (i < leftarr.length) {
            dataset[k] = leftarr[i]
            i += 1
            k += 1
        }
        // # if the right array still has values, add them
        while (j < rightarr.length) {
            dataset[k] = rightarr[j]
            j += 1
            k += 1
        }
    }
}

// # test the merge sort with data
let items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

console.log(items)
mergesort(items)
console.log(items)

let test2=[10, 5, 2, 7, 4, 9, 12, 1, 8, 6, 11, 3]
console.log(test2)
mergesort(test2)
console.log(test2)
