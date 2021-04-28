function sortArray(arr){
    // test case arr = [7, 1, 3, 2, 4, 5, 6]
        // brute force 
            let newArray = []
            for (let i = 0 ; i < arr.length ; i++){
                let min = arr[i]
                for (let j = i+1 ; j< arr.length; j++){
                    let temp; 
                    if (arr[j] < min){
                        temp = min
                        min = arr[j]
                        arr[j] = temp
                    }
                }
                newArray.push(min)
            } 
            return newArray

}
// numArray.sort((a, b) => a - b); // For ascending sort
// numArray.sort((a, b) => b - a); // For descending sort

function sortArrayOn(arr){
    let swap=0
            for (let i = 0 ; i < arr.length-1 ; i++){    
                    let temp; 
                    if (arr[i] !== (i+1)){
                        temp = arr[i]
                        arr[i] = (i+1)
                        arr[arr.lastIndexOf(i+1)] = temp
                        swap+=1
                    }
            }
            // console.log(swap)
            console.log(arr)
            return arr
}

let arr = [7, 1, 3, 2, 4, 5, 6]
// console.log(arr.sort((a,b) => a-b ))
// console.log(sortArrayOn(arr)) 
sortArrayOn(arr)