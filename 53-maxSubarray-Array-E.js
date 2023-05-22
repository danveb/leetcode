/* Max Subarray (Leetcode #53) 

Problem: Given array "nums", find the subarray with largest sum and return it. 

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
output = 6; [4, -1, 2, 1] 

nums = [1]
output = 1; subarray [1] has largest sum of 1

nums = [5, 4, -1, 7, 8] 
output = 23; subarray [5, 4, -1, 7, 8] has largest sum of 23 

idx     0   1   2   3   4   5   6   7   8
num     -2  1   -3  4   -1  2   1   -5  4
        i   j                               => currSum -2; maxSum -2; currSum (j) -1; maxSum -1 
                j                           => currSum (j) -4; maxSum -1
                    j                       => currSum (j) 0; maxSum 0
                        j                   => currSum (j) -1; maxSum 0
                            j               => currSum (j) 1; maxSum 1 
                                j           => currSum (j) 2; maxSum 2
                                    j       => currSum(j) -3; maxSum 2
                                        j   => currSum(j) 1; maxSum 2         
            i   j                           => currSum 1; maxSum 1; currSum(j) -2; maxSum 1
                    j                       => currSum (j) 2; maxSum 2
                        j                   => currSum (j) 1; maxSum 2
                            j               => currSum (j) 3; maxSum 3
                                j           => currSum (j) 4; maxSum 4
                                    j       => currSum (j) -1; maxSum 4
                                        j   => currSum (j) 3; maxSum 4
                i   j                       => currSum -3; maxSum -3; currSum (j) 1; maxSum 1
                        j                   => currSum (j) 0; maxSum 1
                            j               => currSum (j) 2; maxSum 2
                                j           => currSum (j) 3; maxSum 3
                                    j       => currSum (j) -2; maxSum 3
                                        j   => currSum (j) 2; maxSum 3
                    i   j                   => currSum 4; maxSum 4; currSum (j) 3; maxSum 4
                            j               => currSum (j) 5; maxSum 5
                                j           => currSum (j) 6; maxSum 6
                                    j       => currSum (j) 1; maxSum 6
                                        j   => currSum (j) 5; maxSum 6

                        ...

1. Brute Force 
- use nested for loops to iterate over input array 
- need variable for maxSum at 0 and currentSum at 0 

Approach:  
- edge case: if input array is empty return 0
- initialize maxSum at -Infinity (any value > will be new maxSum) 
- iterate over input array once (i at 0 until end) 
- initialize currentSum as nums[i]
- set maxSum as MAX between maxSum, currentSum 
- iterate over input array again (j at i + 1 until end) 
- set currentSum += nums[j] 
- set maxSum as MAX between maxSum, currentSum 
- return maxSum 

Time: O(n^2) for nested for loops (i/j) 
Space: O(1) we don't incur extra memory

function maxSubArray(nums) {
    if(nums.length === 0) return 0;
    let maxSum = -Infinity; 
    for(let i = 0; i < nums.length; i++) {
        let currentSum = nums[i]; 
        maxSum = Math.max(currentSum, maxSum); 
        for(let j = i + 1; j < nums.length; j++) {
            currentSum += nums[j]; 
            maxSum = Math.max(currentSum, maxSum); 
        }
    };
    return maxSum; 
}

=== 

idx     0   1   2   3   4   5   6   7   8
num     -2  1   -3  4   -1  2   1   -5  4
        i                                   => currentSum + (-2) = -2; maxSum = 0 
            i                               => currentSum + 1 = 1; maxSum = 1 
                i                           => currentSum + (-3) = -2; maxSum = 0 
                    i                       => currentSum + 4 = 4; maxSum = 4 
                        i                   => currentSum + (-1) = 3; maxSum = 4 
                            i               => currentSum + 2 = 5; maxSum = 5 
                                i           => currentSum + 1 = 6; maxSum = 6 
                                    i       => currentSum + (-5) = 1; maxSum = 6 
                                        i   => currentSum + 4 = 5; maxSum = 6 


2. Optimal
- use only 1 for loop (O(n))
- keep track of maxSum and currentSum as -Infinity (any larger will become new) 
- iterate over input array once (i at 0 until end) 
- check: if currentSum < 0? we want to reset currentSum back to 0
- add currentSum to current element of array 
- set maxSum to max between currentSum, maxSum
- return maxSum 

Time: O(n) 
Space: O(1) 

function maxSubArray(nums) {
    if(nums.length === 0) return 0;
    let maxSum = -Infinity;
    let currentSum = -Infinity; 
    for(let i = 0; i < nums.length; i++) {
        if(currentSum < 0) currentSum = 0;
        currentSum += nums[i]; 
        maxSum = Math.max(maxSum, currentSum); 
    };
    return maxSum; 
}

=== 

idx     0   1   2   3   4
num     5   4   -1  7   8
       c/m                  => currentSum, maxSum = 5
            i               => currentSum = Math.max(4, 5 + 4) = 9, maxSum = 9
                i           => currentSum = Math.max(-1, 9 - 1) = 8, maxSum = 9 
                    i       => currentSum = Math.max(7, 8 + 7) = 15, maxSum = 15
                        i   => currentSum = Math.max(8, 15 + 8) = 23, maxSum = 23

3. Optimal 
- use only 1 for loop (O(n)) 
- keep track of maxSum and currentSum as -Infinity
- iterate over input array once (i at 0 until end)
- set currentSum to max between current element and currentSum + current element 
- set maxSum to max between currentSum and maxSum
- return maxSum 

Time: O(n) where n is length of input array
Space: O(1) we don't incur extra memory

*/

function maxSubArray(nums) {
    if(nums.length === 0) return 0;
    let maxSum = -Infinity;
    let currentSum = -Infinity; 
    for(let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]); 
        maxSum = Math.max(currentSum, maxSum); 
    };
    return maxSum; 
}