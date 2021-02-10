// Maximum sum of two elements whose digit sum is equal

// Given an array arr[] of N positive elements, the task is to find a pair in the array such that the digit sum of elements in the pair are equal and their sum is maximum. Print -1 if it is not possible to find the pair else print the maximum sum.

// Examples:

// Input: arr[] = {55, 23, 32, 46, 88}
// Output: 101
// (23, 32) with digit sum 5 and (55, 46)
// with digit sum 10 are the only pairs
// with equal digit sum. The pair with maximum
// sum is (55, 46) i.e. 55 + 46 = 101

// Input: arr[] = {18, 19, 23, 15}
// Output: -1
// Since there are no two elements
// whose digit sums are equal.

export function equalDigitSum(nums: number[]): number {
    const sumDigits = (num: number): number => {
      let sum = 0;
      while (num != 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      return sum;
    };
  
    const map: {[key: number]: number} = {};
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
      const digitSum = sumDigits(nums[i]);
      if (map[digitSum]) {
        max = Math.max(max, map[digitSum] + nums[i]);
      }
      map[digitSum] = Math.max(map[digitSum] || 0, nums[i]);
    }
    return max;
  }