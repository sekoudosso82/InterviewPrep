// Complete the countSwaps function below.
function countSwaps(a) {
    let swapCounter=0
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
                // swap(a[j], a[j + 1]);
            let temp=''
            if (a[j] > a[j + 1]) {
                temp=a[j+1]
                a[j+1]=a[j]
                a[j]=temp
                swapCounter+=1
            }
        }
    }
    console.log("Array is sorted in",swapCounter,"swaps.")
    console.log("First Element:",a[0])
    console.log("Last Element:",a[a.length-1])
}

countSwaps([6,4,1,5])