

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true

// Example 2:

// Input: [1,2,3,4]
// Output: false

// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

export function containsDuplicate(nums: number[]): boolean {
    const map = new Map<number, boolean>();
    for (let i = 0; i < nums.length; i++) {
      if (map.get(nums[i])) return true;
      map.set(nums[i], true);
    }
    return false;
  }
  
  export function containsDuplicateV2(nums: number[]): boolean {
    const set = new Set(nums);
    return nums.length !== set.size;
  }
