/* Find All Numbers Disappeared in Array (Leetcode #448) 

Problem: Given an array "nums" of "n" integers where nums[i] is in range [1,n]
return an array of all integers in range [1,n] that do NOT appear in nums

nums = [4, 3, 2, 7, 8, 2, 3, 1]
output = [5, 6] 

Read out loud:
- we have "n" integers in nums array [1, n] n = 8 between [1, 8] 
- we're going to iterate once over input array (i at 1 until end)
- with help of hashset we'll initialize all nums there
- check: if hashset does NOT have current index? 
- we'll push out to array 
- return the new array 

1. Brute Force 
- edge case: if nums array is empty we'll return []
- initialize hashset with nums array 
- iterate over input array once (i at 1 until end) 
- check: if !hashmap.has(i) ? 
-- push i to output array 
- return output

Time: O(n) where "n" is length of input array 
Space: O(n) we use a hashset

*/ 

function findDisappearedNumbers(nums) {
    // edge case
    if(nums.length === 0) return []; 
    const output = [];
    const hashset = new Set(nums); 
    for(let i = 1; i <= nums.length; i++) {
        // if hashset doesn't have all indices from 1 until 8 
        // we know 5, 6 will not be present so we push to output array
        if(!hashset.has(i)) {
            output.push(i); 
        };
    };
    return output; 
}