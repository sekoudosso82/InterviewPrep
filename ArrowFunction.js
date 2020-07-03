Task

// Complete the function in the editor. It has one parameter: 
// an array,nums. It must iterate through the array performing one of 
// the following actions on each element:

// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    
    for (let i = 0 ; i < nums.length ; i++){
        if (nums[i]%2 === 0){
            nums[i] = nums[i]* 2
        } else{
            nums[i] = nums[i] * 3
        }
    }

return nums

}