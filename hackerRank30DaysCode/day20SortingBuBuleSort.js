// Task
// Given an array, a, of size n distinct elements, 
// sort the array in ascending order using the Bubble Sort 
// algorithm above. Once sorted, print the following 3 lines:

// 1.    Array is sorted in numSwaps swaps.
// where numSwaps is the number of swaps that took place.

// 2. First Element: firstElement
// where firstElement is the first element in the sorted array.
// 3. Last Element: lastElement
// where lastElement is the last element in the sorted array.

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let l = a.length
    // console.log(l)
    let numberOfSwaps = 0;
    for (let i = 0; i < l; i++) {
    // Track number of elements swapped during a single array traversal
    // let numberOfSwaps = 0;
    
        for (let j = 0; j < l - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                // swap(a[j], a[j + 1]);
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                numberOfSwaps++;
            }
        }
    
        // If no elements were swapped during a traversal, array is sorted
        // if (numberOfSwaps == 0) {
        //     break;
        // }
    }
    console.log("Array is sorted in",numberOfSwaps,"swaps.")
    console.log("First Element:",a[0])
    console.log("Last Element:",a[l-1])
}