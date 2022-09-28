/* Minimum Subarray Sum (Leetcode #209) 

Problem: Given an array "nums" and "target" return minimum length of contiguous subarray, which sum is greater than or equal to target. Return 0 if no such subarray. 

nums = [2,3,1,2,4,3] target = 7
output = 2; subarray [4,3] matches target and has minimum length

idx     0   1   2   3   4   3
num     2   3   1   2   4   3
       s/e                      => start/end both at 0
        
Notes: 
- sliding window pattern where we first start from 0 and move towards the right 

Time: O(n) as we iterate once for input array 
Space: O(1) we don't need any extra memory for data structures

Approach: 
- initialize windowStart at 0 
- initialize windowSum at 0 
- initialize minLength as Infinity 
- for loop windowEnd at 0 until end 
- at each iteration we will increase windowSum by current element of the loop 
- keep looping while windowSum >= target
- set minLength as minimum between minLength and windowEnd-windowStart+1
- decrease windowSum by nums[windowStart++]
- return minLength === Infinity ? 0 : minLength 

*/ 

function minSubArrayLen(nums, target) {
    let windowStart = 0
    let windowSum = 0
    let minLength = Infinity 
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd] 
        // keep looping while windowSum >= target 
        while(windowSum >= target) {
            minLength = Math.min(minLength, windowEnd-windowStart+1) 
            windowSum -= nums[windowStart++]
        }
    }
    return minLength === Infinity ? 0 : minLength; 
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))