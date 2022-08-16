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

Brute Force 
- initialize a hashset as new Set() -> helpful to detect duplicates
- iterate over input array once (i at 0 until end) 
- check: if hashset.has(num[i]) we return true
- else we will add num[i] to hashset 
- return false after looping everything 

Time: O(n) as we iterate input array once 
Space: O(n) as we use a hashset 

*/ 

function containsDuplicate(nums) {
    const hashset = new Set(); 
    for(let i = 0; i < nums.length; i++) {
        if(hashset.has(nums[i])) {
            return true; 
        } else {
            hashset.add(nums[i]); 
        };
    }; 
    return false; 
}; 

console.log(containsDuplicate([1, 2, 3, 4, 5])); // false 
console.log(containsDuplicate([1, 2, 3, 3, 1, 2])); // true