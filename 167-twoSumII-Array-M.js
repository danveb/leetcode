/* Two Sum II - Array is Sorted (Leetcode #167) 

Problem: Given a 1-indexed sorted array of integers "nums", find two numbers that they add up to specific target. Return the indices of the two numbers that add up. 

nums = [2, 7, 11, 15] target = 9
output = [1, 2]

Scratchpad: 
idx     0   1   2   3 
num     2   7   11  15
        L           R   => 2 + 15 > 9; so move R-- 
        L       R       => 2 + 11 > 9; so move R--
        L   R           => 2 + 7 === 9 so return L + 1 && R + 1
        
idx     0   1   2
num     2   3   4   Target = 6
        L       R   => 2 + 4 === 6 so return L + 1 && R + 1
        
idx     0   1
num     -1  0   Target = -1
        L   R   => -1 + 0 === -1 so return L + 1 && R + 1
        
Approach -> Time: O(n) where n is # of elements in array 
         -> Space: O(1) as we don't need any extra memory 
- array is 1-indexed, meaning it starts at 1 (not 0 like 0-indexed arrays) 
- initialize L as beginning of array 
- initialize R as end of array 
- keep looping while left <= right 
- check: if nums[left] + nums[right] > target we'll move R-- 
- else if nums[left] + nums[right] === target we'll return [left+1, right+1]
- else we assume nums[left] + nums[right] < target, so we move L++ 

*/ 

function twoSumII(nums, target) {
    let left = 0 
    let right = nums.length - 1
    while(left <= right) {
        if(nums[left] + nums[right] > target) {
            right-- 
        } else if(nums[left] + nums[right] < target) {
            left++
        } else {
            // we meet target 
            return [left+1, right+1]; 
        }
    }
}

console.log(twoSumII([2,7,11,15], 9))
console.log(twoSumII([2,7,11,15], 18))