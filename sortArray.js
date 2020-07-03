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