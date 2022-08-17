/* Three Sum (Leetcode #15) 

Problem: Given an array "nums", return all triplets [nums[i], nums[j], nums[k]] such that i !== j, i !== k, j !== k. And nums[i] + nums[j] + nums[k] === 0 

nums = [-1, 0, 1, 2, -1, -4] 
output = [[-1, -1, 2], [-1, 0, 1]] 

nums = [] 
output = [] 

nums = [0]
output = [] 

Scratchpad: 
idx     0   1   2   3   4   5 
num     -1  0   1   2   -1  -4
        i   j   k               

idx     0   1   2   3   4   5
num     -3  3   4   -3  1   2
numSort -3  -3  1   2   3   4
         i  L               R   => initially i at 0; L at i + 1; R at end of array 
         i      L           R   => i + L + R > 0; R-- 
         i      L       R       => i + L + R > 0; R-- 
         i      L   R           => i + L + R === 0; return [nums[i], nums[left], nums[right]] 

    PROBLEM: RETURNS DUPLICATES 
    Brute Force Approach #1 - O(n^3) time | O(1) space
    - initialize triplets as output array 
    - edge case: if input array is empty we'll have to return output array 
    - iterate over input array once (i at 0 until end)
    - iterate over input array again (j at i + 1 until end)
    - iterate over input array again again (k at j + 1 until end)
    - initialize tripleSum and set to nums[i] + nums[j] + nums[k] 
    - check: if tripleSum === 0 ? 
    - we will push nums[i], nums[j], nums[k] to triplets array 
    - return triplets array 

    Time: O(n^3) for nested for loops 
    Space: O(1) we don't incur extra memory

    function threeSum(nums) {
        // edge case
        if(nums.length === 0) return []; 
        const triplets = []; 
        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                for(let k = j + 1; k < nums.length; k++) {
                    let tripleSum = nums[i] + nums[j] + nums[k]; 
                    if(tripleSum === 0) {
                        triplets.push([nums[i], nums[j], nums[k]]); 
                    }
                }
            }
        }
        return triplets; 
    }

    PROBLEM: TIME LIMIT EXCEEDED
    Brute Force Approach #2 - STILL O(n^3) time
    - manually sort the array in ascending order to get O(n log n) time, which is still smaller than O(n^3) asymptotically-speaking
    - initialize triplets as output array 
    - edge case: if input array is empty we'll have to return output array 
    - iterate over input array once (i at 0 until end)
    -- DUPLICATE CHECK: if current value is equal to the value before we should continue array & make sure that index is > 0
    - iterate over input array again (j at i + 1 until end)
    -- DUPLICATE CHECK: if current value is equal to the value before we should continue array & make sure that index is > 0
    - iterate over input array again again (k at j + 1 until end)
    -- DUPLICATE CHECK: if current value is equal to the value before we should continue array & make sure that index is > 0
    - initialize tripleSum and set to nums[i] + nums[j] + nums[k] 
    - check: if tripleSum === 0 ? 
    - we will push nums[i], nums[j], nums[k] to triplets array 
    - return triplets array 

    Time: O(n log n) for sorting + O(n^3) for nested for loops = O(n^3) final 
    Space: O(1) we don't incur extra memory

    function threeSum(nums) {
        // manually sort the array that gives O(n log n) time
        nums.sort((a, b) => a - b); 
        // edge case
        if(nums.length === 0) return []; 
        const triplets = []; 
        for(let i = 0; i < nums.length; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            for(let j = i + 1; j < nums.length; j++) {
                if(j > i + 1 && nums[j] === nums[j - 1]) continue;
                for(let k = j + 1; k < nums.length; k++) {
                    if(k > j + 1 && nums[k] === nums[k - 1]) continue;
                    let tripleSum = nums[i] + nums[j] + nums[k]; 
                    if(tripleSum === 0) {
                        triplets.push([nums[i], nums[j], nums[k]]); 
                    }
                }
            }
        }
        return triplets; 
    }

idx     0   1   2   3   4   5
num     -1  0   1   2   -1  -4
sor     -4  -1  -1  0   1   2
        i   L               R   => initially i at 0; L at i + 1; R at end of array 
        i       L           R   => i + L + R < 0; L++ 
        i           L       R   => i + L + R < 0; L++ 
        i               L   R   => i + L + R < 0; iterate i again 
            i   L           R   => i + L + R === 0; return [nums[i], nums[left], nums[right]] 
            i       L       R   => i + L + R > 0; R-- 
            i       L   R       => i + L + R === 0; [nums[i], nums[left], nums[right]] 
                i   L       R   => i + L + R > 0; R-- 
                i   L   R       => i + L + R === 0; BUT THIS IS A DUPLICATE! 
                    i   L   R   => i + L + R > 0
                    
*/

// Time: O(n log n) for sorting + O(n^2) = O(n^2) 
// Space: O(1) or O(n) because sorting takes extra memory in certain languages

function threeSum(nums) {
    // manually sort the array that gives O(n log n) time
    nums.sort((a, b) => a - b); 
    // edge case
    if(nums.length === 0) return []; 
    const triplets = []; 
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1; 
        let right = nums.length - 1; 
        // keep looping while left < right 
        while(left < right) {
            // case 1: nums[i] + nums[left] + nums[right] > 0
            if(nums[i] + nums[left] + nums[right] > 0) {
                right--
            } else if(nums[i] + nums[left] + nums[right] < 0) {
                // case 2: nums[i] + nums[left] + nums[right] < 0
                left++
            } else {
                // case 3: nums[i] + nums[left] + nums[right] === 0
                triplets.push([nums[i], nums[left], nums[right]]); 
                // conditional check while any duplicates are present to left && right
                // example: [-4, 0, 0, 1, 3, 4, 4] 
                // LEFT duplicates are 0 0 
                // RIGHT duplicates are 4 4
                while(nums[left] === nums[left + 1]) left++ 
                while(nums[right] === nums[right - 1]) right--
                // continue moving pointers to look for other potential triplets
                left++
                right--
            };
        }
    }
    return triplets; 
}