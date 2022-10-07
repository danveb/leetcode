/* Max Consecutive Ones (Leetcode #458)

Problem: Given a binary array "nums", return max # of consecutive 1's. 

nums = [1, 1, 0, 1, 1, 1]
output = 3; the first two 0's and the last three 0's; max is 3

idx     0   1   2   3   4
num     1   1   0   1   1
        i                   => add to count; count = 1; maxCount = 1
            i               => add to count; count = 2; maxCount = 2
                i           => reset count; reset maxCount back to 0
                    i       => add to count; count = 1; maxCount = 1
                        i   => add to count; count = 2; maxCount = 2

Approach
- initialize count at 0 
- initialize maxCount = 0
- iterate over input array once (i at 0 until end)
- check: if current element is 1 ? we increase count by 1
- else: current element is a 0 so we reset count back to 0 
- set maxCount as MAX between count, maxCount
- return maxCount

Time: O(n) where n is # elements in input array
Space: O(1) we don't incur extra memory

*/ 

function findMaxConsecutiveOnes(nums) {
    // edge case: if array is empty we return 0
    if(nums.length === 0) return 0;
    let count = 0;
    let maxCount = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++
        } else {
            count = 0; 
        };
        maxCount = Math.max(count, maxCount)
    }
    return maxCount; 
};