/* Squares of Sorted Array (Leetcode #977) 

Problem: Given an array "nums" sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. 

nums = [-4, -1, 0, 3, 10] 
output = [0, 1, 9, 16, 100] 

Scratchpad: 
idx     0   1   2   3   4
num     -4  -1  0   3   10
        L               R   => Math.abs(-4) vs. Math.abs(10); unshift 100; right--
        L           R       => Math.abs(-4) vs. Math.abs(-1); unshift 16; left++
            L       R       => Math.abs(-1) vs. Math.abs(3); unshift 9; right--
            L   R           => Math.abs(-1) vs. Math.abs(0); unshift 1; left++
               L/R           => unshift 0
                            => output = [0, 1, 9, 16, 100]
                            
Approach -> Time: O(n); where n is # of elements 
         -> Space: O(1) 
- initialize output as empty array 
- initialize LEFT at beginning of array 
- initialize RIGHT at end of array 
- keep looping while left < right 
- check: if absolute value of nums[left] > absolute value of nums[right] ? 
- we will "unshift" square of nums[left] to output array 
- also increase LEFT++ 
- else: we "unshift" square of nums[right] to output array 
- also decrease RIGHT--
- return output array

*/ 

function sortedSquares(nums) {
    const output = [] 
    let left = 0
    let right = nums.length -1 
    while(left <= right) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            output.unshift(nums[left]**2) 
            left++
        } else {
            output.unshift(nums[right]**2)
            right--
        }
    }
    return output
}