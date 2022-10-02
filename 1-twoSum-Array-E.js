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

Brute Force 
- iterate over input array once (i at 0 until end) 
- iterate over input array again (j at i + 1 until end)
- check: if nums[i] + nums[j] === target ? 
-- return its indices [i, j] 

Time: O(n^2) where we perform 2 nested for loops
Space: O(n) we return an output array 

function twoSum(nums, target) {
    // edge case: if nums array is empty we return [] 
    if(nums.length === 0) return []; 
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

===

idx 0   1   2
num 3   2   4
    i           => difference = 6 - 3; hashmap { 3:0 }
        i       => difference = 6 - 2; hashmap { 3:0, 2:1 }
            i   => difference = 6 - 4; hashmap.has 2; return [1,2]

Optimal
- initialize hashmap as new Map() 
- iterate over input array once (i at 0 until end)
- initialize difference as target - nums[i]
- check: if hashmap DOES NOT HAVE difference? 
-- we'll set current element and its index 
- else: hashmap HAS difference
-- we'll return [hashmap.get(difference), i]

Time: O(n) where n is # of elements in input array
Space: O(n) we use a hashmap (data structure) 

*/ 

function twoSum(nums, target) {
    // edge case: if nums array is empty we return []
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