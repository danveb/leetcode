/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* Find All Duplicates in Array (Leetcode #442) 

Problem: Given an array "nums", return an array of all the integers that appear twice. 
Write an algorithm that runs in O(n) and uses only O(1) space. 

nums = [4, 3, 2, 7, 8, 2, 3, 1] 
output = [2, 3] 

nums = [1, 1, 2]
output = [1]

nums = [1] 
output = [] 

Scratchpad: 

1. Brute force -> Time: O(n) / Space: O(n) as we use a hashset to keep duplicates out
idx     0   1   2   3   4   6   7   8   
num     4   3   2   7   8   2   3   1  => initialize a hashset Set {}
        i                               => i = 0; add to Set { 4 } 
            i                           => i = 3; add to Set { 4, 3 }
                i                       => i = 2; add to Set { 4, 3, 2 } 
                    i                   => i = 7; add to Set { 4, 3, 2, 7 }
                        i               => i = 8; add to Set { 4, 3, 2, 7, 8 } 
                            i           => i = 2; it's a duplicate so we'll push to res [2] 
                                i       => i = 3; it's a duplicate so we'll push to res [2, 3] 
                                    i   => i = 1; add to Set { 4, 3, 2, 7, 8, 1 }

Approach -> Time: O(n) / Space: O(n) as we use a hashset to keep duplicates out 
- edge case: if nums array is empty we just return [] 
- initialize a hashset as new Set() 
- initialize res as empty array
- iterate over the array once (i at 0 until end) 
- check: if hashset doesn't have current element we'll add it to hashset
- else: we'll push it to res array
- return res array

*/ 

function findDuplicates(nums) {
    if(nums.length === 0) return [] 
    const hashset = new Set() 
    const res = [] 
    for(let i = 0; i < nums.length; i++) {
        if(!hashset.has(nums[i])) {
            hashset.add(nums[i]) 
        } else {
            res.push(nums[i])
        }
    }
    return res; 
}