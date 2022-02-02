/* Leetcode #1: Two Sum 

Problem: Given an array of integers "nums" and an integer "target", return indices of the two numbers such that they add up to "target".
Assume each input would have exactly one solution, and may not use the same element twice.

nums = [2, 7, 11, 15] target = 9 
output = [0, 1] because nums[0] + nums[1] = 9 

nums = [3, 2, 4] target = 6 
output = [1, 2] because nums[1] + nums[2] = 6 

Scratchpad: 

target = 9
idx 0   1   2   3   
num 2   7   11  15 
    i               => difference = 9 - 2; Map {2: 0}
        i           => difference = 9 - 7; [0, 1] 

Time: O(n) per n elements of nums array 
Space: O(n) 

Notes: 
- array is NOT sorted so we can't perform binary search (O(log n)) 
- if allowed to manually sort the array it would mess up the indices so forget it 
- initialize a new Map() -> helpful for better time complexity 
- iterate over nums array once 
- initialize difference var as target - nums[i] 
- check: if map has difference we will return i, and the difference from the map 
- else: we add nums[i] and i to the Map 

*/

function twoSum(nums, target) {
    const map = new Map() 
    for(let i = 0; i < nums.length; i++) {
        let difference = target - nums[i] 
        if(map.has(difference)) {
            return [map.get(difference), i] 
        } else {
            map.set(nums[i], i)
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))