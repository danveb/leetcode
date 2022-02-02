/* Leetcode #217: Contains Duplicate

Problem: Given an array "nums" return true if any value appears at least twice in array.
Return false if every element is distinct 

nums = [1, 2, 3, 1] 
output = true; 1 appears at least twice  

nums = [1, 2, 3, 4]
output = false; all distinct 

nums = [1, 1, 1, 3, 3, 4, 3, 4, 2, 4, 2] 
output = true; 1, 3, 4, 2 appear at least twice

Scratchpad: 
idx 0   1   2   3
str 1   2   3   1
    i               => 1 is not present so we'll add to the Set 
        i           => 2 is not present in the Set; so add it 
            i       => 3 is not present in the Set; so add it 
                i   => 1 is in the Set (means it's a duplicate) 

Time: O(n) where n is # of elements in nums array 
Space: O(1) 

Notes: 
- initialize a new Set() -> helpful to detect duplicates 
- iterate over the strings 
- check: if Set has str[i] return true 
- else: add it to the Set 
- return false... 

*/

function containsDuplicate(nums) {
    // edge case: if array is empty we just return false 
    if(nums.length === 0) return false 
    const set = new Set() 
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            return true 
        } else {
            set.add(nums[i]) 
        }
    }
    return false; 
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 4, 2, 4, 2])) 