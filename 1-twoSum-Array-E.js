/* Two Sum (Leetcode #1) 

Problem: Given an array of integers "nums" and "target" return the indices
of two numbers that add up to target. Return pair in any order. 

nums = [2, 7, 11, 15] target = 9
output = [0,1] because [2, 7] = 9

nums = [3, 2, 4] target = 6
output = [1,2] because [2, 4] = 6

nums = [3, 3] target = 6
output = [0,1] because [3, 3] = 6

idx 0   1   2   
num 3   2   4
    i   j       => 3 + 2 = 5; NOT TARGET 
    i       j   => 3 + 4 = 7; NOT TARGET
        i   j   => 2 + 4 = 6; meets target [1, 2] 

1. Brute Force
- use a nested for loop (i & j) to calculate nums[i] + nums[j]

Algorithm
- edge case: if nums array is empty we return [] 
- iterate over input array once (i at 0 until end) 
- iterate over input array again (j at i + 1 until end) 
- initialize sum = nums[i] + nums[j] 
- check: if sum === target? we can return its indices [i,j]

Time: O(n^2) where we perform nested for loops 
Space: O(1) we don't incur extra memory apart from output [] 

function twoSum(nums, target) {
    if(nums.length === 0) return []; 
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j]; 
            // check with target
            if(sum === target) return [i, j]; 
        }
    }
}

===

idx 0   1   2
num 3   2   4
    i           => difference = 6 - 3; hashmap { 3:0 }
        i       => difference = 6 - 2; hashmap { 3:0, 2:1 }
            i   => difference = 6 - 4; hashmap.has 2; return [1,2]

2. Optimal 
- use a hashmap to store indices of elements in array 
- as we iterate through each element we calculate difference = target - nums[i] 
- if hashmap doesn't have the difference we'll keep looping 
- else we can just return indices 

Algorithm
- same edge case 
- initialize hashmap as new Map() 
- iterate over input array once 
- initialize difference = target - nums[i]
- check: if hashmap DOES NOT HAVE difference? 
-- SET current element with its index to hashmap 
- else: hashmap HAS difference so we'll return [hashmap.get(difference), i]

Time: O(n) where n is # of elements in input array
Space: O(n) we use a hashmap (data structure) 

3. Spin off... do we want to return the numbers that add up to target? 
- use a hashmap to store current elements 
- iterate over input array once (i at 0 until end)
-- initialize difference as target - current element 
-- check: if hashmap does NOT have difference? 
--- hashmap.SET nums[i], nums[i]
-- else: 
--- return [hashmap.get(difference), nums[i]

Time: O(n) where n is # of elements in input array
Space: O(n) we use a hashmap (data structure) 

*/ 

function twoSum(nums, target) {
    if(nums.length === 0) return []; 
    const hashmap = new Map();
    for(let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]; 
        if(!hashmap.has(difference)) {
            hashmap.set(nums[i], i); 
        } else {
            return [hashmap.get(difference), i]; 
        }
    }
}

console.log(twoSum([2, 7, 9, 11, 15], 26)); // elements at index [3, 4] add up to 26

// SPINOFF 
// function twoSum(nums, target) {
//     if(nums.length === 0) return [];
//     const hashmap = new Map(); 
//     for(let i = 0; i < nums.length; i++) {
//         let difference = target - nums[i]; 
//         if(!hashmap.has(difference)) {
//             hashmap.set(nums[i], nums[i]); 
//         } else {
//             return [hashmap.get(difference), nums[i]]; 
//         }
//     }
// }

// console.log(twoSum([2, 7, 11, 15], 9)); // [2, 7] add up to 9