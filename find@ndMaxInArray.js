// Task

// Complete the getSecondLargest function in the editor below. 
// It has one parameter: an array, nums, of n numbers. 
// The function must find and return the second largest number in nums.   


function getSecondLargest(nums) {
    // arr = [1,2,6,6,5] ==> 5
  
    let max1 = nums[0]
    let max2 = nums[1]
    if (max2 > max1){
        max2 = nums[0]
        max1 = nums[1]
    }
    for ( let i = 0 ; i < nums.length ; i++ ){
        if ( nums[i] > max1 ){
          max2 = max1
          max1 = nums[i]
        }else if ( nums[i] > max2 && nums[i] < max1 ){
          
          max2 = nums[i]
        }
    }
    return max2
  }