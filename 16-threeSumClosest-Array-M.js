/* 3Sum Closest (Leetcode #16) 

Problem: Given an array "nums" of length "n" and "target", find 3 ints 
such that sum is closest to target. Return sum of 3 integers. 

nums = [-1, 2, 1, -4] target = 1
output = 2; sum [-1, 2, 1] is closest to target at 2

idx     0   1   2   3   
num     -1  2   1   -4  => closest = infinity
        i   j   k       => i + j + k = 2; ABS(sum - target) = 1 < ABS(Infinity - target) = Infinity

1. Brute Force 
- use 3 pointers (i, j, k) and get the sum to see if close to "target" 
- check if sum of 3 pointers' difference is the lowest among other numbers 

Approach
- initialize difference at positive Infinity (any number lower than this will become lowest difference)
- iterate over input array once (i at 0 until end)
- iterate over input array again (j at i + 1 until end)
- iterate over input array again (k at j + 1 until end)
- initialize sum = nums[i] + nums[j] + nums[k] 
- check: if absolute value of (sum-target) < absolute value of (closest-target) ? 
- we'll set closest to current sum
- return sum

Time: O(n^3) for nested for loops (i, j, k) 
Space: O(1)

function threeSumClosest(nums, target) {
    // edge case: if array is empty we return 0 since 0 is closest to target 
    if(nums.length === 0) return 0; 
    let closest = Infinity; 
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]; 
                if(Math.abs(sum - target) < Math.abs(closest - target)) {
                    closest = sum; 
                }
                
            }
        }
    };
    return closest; 
};

===

2. Can we do better? 
- in 3Sum we can manually sort the input array (O(n log n)) and use 2 pointer approach at O(n^2) 

Approach
- edge case: if nums array is empty we'll return 0
- manually sort input array in ascending order 
- initialize closestSum as nums[0] + nums[1] + nums[2] 
- iterate over input array once (i at 0 until -2)
- initialize left pointer at i + 1
- initialize right pointer at array.length - 1
- keep looping while LEFT <= RIGHT
- initialize sum at nums[i] + nums[left] + nums[right]
- check: if ABS(sum - target) < ABS(closestSum - target) ? 
-- set closestSum to be sum 
- check: if sum < target? left++ else right-- 
- return closestSum 

Time: O(n^2) 
Space: O(1) 

*/ 

function threeSumClosest(nums, target) {
    if(nums.length === 0) return 0;
    nums.sort((a, b) => a - b); 
    let closestSum = nums[0] + nums[1] + nums[2]; 
    for(let i = 0; i < nums.length - 2; i++) {
        let left = i + 1; 
        let right = nums.length - 1; 
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right]; 
            // main condition:
            if(Math.abs(sum - target) < Math.abs(closestSum - target)) {
                // set closest to be the sum
                closestSum = sum; 
            } 
            
            // check if sum < target we know to move left++; else right--
            if(sum < target) {
                left++;
            } else {
                right--; 
            }
        }
    };
    return closestSum; 
}