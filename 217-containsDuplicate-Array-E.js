/* Contains Duplicate (Leetcode #217)

Problem: Given an array "nums" return TRUE if any value appeares at least TWICE in array. 
Return false if every element is distinct 

nums = [1, 2, 3, 1] 
output = true; 1 appears twice on input array 

nums = [1, 2, 3, 4] 
output = false; all elements are distinct 

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] 
output = true; 1, 3, 2, 4 are repeating

idx     0   1   2   3
num     1   2   3   1   
        i               => i === 1; hashset.add(1) 
            i           => i === 2; hashset.add(2) 
                i       => i === 3; hashset.add(3) 
                    i   => i === 1; hashset.has(1) -> return true 

1. Brute Force
- perform nested for loops (i / j) where we compare if values of i & j are equal
- if the values are equal we know it's duplicate so return true 

Algorithm 
- edge case: if nums array is empty we can just return true... 
- iterate over input array once (i at 0 until end) 
- iterate over input array again (j at i + 1 until end) 
- check: if value of i === j we know it's duplicate so return true
- return false... since all values are distinct

Time: O(n^2) where we perform nested for loops
Space: O(1) we don't incur extra memory

function containsDuplicate(nums) {
    if(nums.length === 0) return false; 
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) return true; 
        }
    };
    return false; 
}

===

idx     0   1   2   3
num     1   2   3   1
        i               => set to hashmap { 1: 1 }
            i           => set to hashmap { 1: 1, 2: 1 }
                i       => set to hashmap { 1: 1, 2: 1, 3: 1 }
                    i   => already in hashmap... return true!

2. Optimal
- use a hashmap to count number of occurrences for each value

Algorithm
- initialize a hashmap as new Map() 
- iterate over input array once (i at 0 until end) 
- check: if hashmap DOES NOT HAVE current element? we'll add it to hashmap with 1 
- else... hashmap HAS current element so we'll return true 
- return false since all values are distinct

Time: O(n) where we "n" is the number of elements in input array 
Space: O(n) we use a hashmap to store each of the values 

*/ 

function containsDuplicate(nums) {
    if(nums.length === 0) return false; 
    const hashmap = new Map(); 
    for(let i = 0; i < nums.length; i++) {
        if(!hashmap.has(nums[i])) {
            hashmap.set(nums[i], 1); 
        } else {
            return true; 
        }
    }
    return false; 
}