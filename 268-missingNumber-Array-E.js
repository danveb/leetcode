/* Missing Number (Leetcode #268)

Problem: Given an array "nums" containing "n" distinct numbers in range of [0, n], 
return the ONLY number in the range that is missing from the array 

nums = [3, 0, 1] 
output = 2; n = 3 since there are 3 numbers, so all numbers are in range [0, 3]. 
2 is the missing number in range since it does not appear in array

nums = [0, 1] 
output = 2; n = 2 since there are 2 numbers, so all numbers are in range [0, 2].
2 is the missing number in range since it does not appear in array 

idx     0   1   2 
num     3   0   1
        i           actualSum = 3; sumIfNotMissing = length + i = 3 
            i       actualSum = 3; sumIfNotMissing = length + i = 4
                i   actualSum = 4; sumIfNotMissing = length + i = 6
                    sumifNotMissing - actualSum = 2

Approach 
- we can see [3, 0, 1] is same as [0, 3] meaning [0, 1, 2, 3] 
- if numbers weren't missing range would be [0, 1, 2, 3] with sum of 6 
- get the actual sum of [0, 1, 3], which is 4 
- subtract 6 - 4 to get 2

- initialize actualSum at 0 
- initialize sumIfNotMissing as the length of array 
- iterate over input array once 
- set actualSum and increase by each num 
- set sumifNotMissing to each index 
- return sumifNotMissing - actualSum 

Time: O(n) as we iterate input array once 
Space: O(1) as we don't require additional memory

*/ 

function missingNumber(nums) {
    // edge case: if length of nums is 0 we return 0
    if(nums.length === 0) return 0
    let sumIfNotMissing = nums.length; 
    let actualSum = 0; 
    for(let i = 0; i < nums.length; i++) {
        sumIfNotMissing += i        
        actualSum += nums[i] 
    }; 
    return sumIfNotMissing - actualSum; 
}

console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([3, 0, 1])); // 2