// largestSubarraySum([1, -1, 5, 3, -7, 4, 5, 6, -100, 4]) // returns 16
// largestSubarraySum([1, 100, 4, 15, 9, 30]) // returns 159
// largestSubarraySum([1, 100, 4, 15, 9, 30, -1]) // returns 159
// largestSubarraySum([-3, 1, 100, 4, 15, 9, 30]) // returns 159
// largestSubarraySum([-3, 1, 100, 4, 15, 9, 30, -1]) // returns 159
// largestSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3]) // returns 7
// largestSubarraySum([2, 1, -3, 4, -1, 2, 1, -5, 4]) // returns 6
// largestSubarraySum([-1, -1, -5, -3, -7, -4, -5, -6, -100, -4]) // returns 0  

function largestSubarraySum(arr){
    let arrayToReturn = [] // array to return that content any possible pairs
     
    
    let initIndex   // initial index 
    let finalIndex  // final index of sub array
   
    for (let i = 0 ; i < arr.length ; i++){
        let max = 0  // max summ found 
        let subSum = 0  
        let maxArr = []  //array of max summ found
        initIndex = i  // initial index 
        let ii= i
        subSum += arr[i] 
        for (let j = ii+1 ; j < arr.length ; j++){ 
            subSum += arr[j]
            if (subSum > max){
                max = subSum
                finalIndex = j // final index of sub array    
            } 
        }
        maxArr.push(max) 
        maxArr.push(initIndex)
        maxArr.push(finalIndex) 
        arrayToReturn.push(maxArr)
        max = 0
        initIndex = 0
        finalIndex=0
        maxArr=[]
        subSum = 0  
    }
    // search for max sum  
    console.log('********   arrayToReturn   *****', arrayToReturn)
    let bigSum 
    for (let j = 1 ; j < arrayToReturn.length ; j++){
        bigSum = arrayToReturn[0][0]
        if (arrayToReturn[j][0] > bigSum){
            bigSum = arrayToReturn[j][0]
        }
    }
    return bigSum
}

// ************
function largestSubarraySum(arr){
    let largestSum = 0
    let currentSum = 0
    let negatives = 0
    let i = 0
    
    /*
    Using a While loop instead of a For loop makes it easy to check more than one element in
    the array without returning to the top of the loop.  A key to implementing a solution in O(n)
    time. 
    */ 
    while(i < arr.length){
        // This inner while loop handles cases where the array starts with negative numbers
        while(arr[i]<0){
            i++
        }
        // the next six lines move the summation process forward as long as the elements are positive
        currentSum += arr[i]
        i++
        while(arr[i] && arr[i] > 0){
            currentSum += arr[i]
            i++
        }
        /*
        This if statement ensures that the sum of positive subarrays preceded by negatives are stored, and potentially
        returned as the answer, in the event that the sum of the positive subarray that follows the negative(s) is less than
        the absolute value of the negative sequence.
        */
        if(arr[i] < 0 || i === arr.length){
            largestSum = Math.max(largestSum, currentSum)
        }
        //this while loop stores the sum of subarrays of negative numbers
        while(arr[i] < 0){
            negatives += arr[i]
            i++
        }
        /*
        If the absolute value of the negative subarray is larger the its preceding positive subarray.  Disregard
        the preceding positive subarray.
        */ 
        if(Math.abs(negatives) >= currentSum){
            currentSum = 0
            negatives = 0
        } else {
            currentSum = currentSum + negatives
            negatives = 0
        }
    }
    return largestSum
}
