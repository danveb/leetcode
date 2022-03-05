/* Max Subarray (Leetcode #53)

Problem: Given an array "nums", find the contiguous subarray (at least one number) which has the largest sum and return its sum. 

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 
output = 6, [4, -1, 2, 1] has largest sum at 6 

Scratchpad:

idx     0   1   2   3   4   5   6   7   8
num     -2  1   -3  4   -1  2   1   -5  4
        i                                   => currentSum + (-2) = -2; maxSubArr = 0 
            i                               => currentSum + 1 = 1; maxSubArr = 1 
                i                           => currentSum + (-3) = -2; maxSubArr = 0 
                    i                       => currentSum + 4 = 4; maxSubArr = 4 
                        i                   => currentSum + (-1) = 3; maxSubArr = 4 
                            i               => currentSum + 2 = 5; maxSubArr = 5 
                                i           => currentSum + 1 = 6; maxSubArr = 6 
                                    i       => currentSum + (-5) = 1; maxSubArr = 6 
                                        i   => currentSum + 4 = 5; maxSubArr = 6 

Approach -> Time: O(n) where n is # of elements in array
- sliding window approach where we iterate array once. When we find a negative number we try to remove it 
- initialize maxSub as first value of array 
- initialize currentSum at 0 
- iterate over array once (i = 0 until end) 
- check: if currentSum < 0 ? we reset currentSum back to 0 
- increase currentSum by num 
- set maxSubArr as maximum between maxSubArr and currentSum 
- return maxSubArr 

*/

function maxSubArray(nums) {
    let maxSubArr = nums[0] 
    let currentSum = 0 
    for(let num of nums) {
        if(currentSum < 0) {
            currentSum = 0 
        }
        currentSum += num 
        maxSubArr = Math.max(maxSubArr, currentSum) 
    }
    return maxSubArr; 
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))