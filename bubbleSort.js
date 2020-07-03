// # Bubble sort algorithm

function bubbleSort(dataset){
    // # start with the array length and decrement each time
    for (let i = dataset.length-1; i>=0; i--){
        // # examine each item pair
        for ( let j=0; j< i; j++) {
            // # swap items if needed
            if (dataset[j] > dataset[j+1]) {
                let temp = dataset[j]
                dataset[j] = dataset[j+1]
                dataset[j+1] = temp
            }

        }
        console.log("Current state: ", dataset)
    }

}



    let list1 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
    console.log("Starting state: ", list1)
    bubbleSort(list1)
    console.log("Final state: ", list1)

