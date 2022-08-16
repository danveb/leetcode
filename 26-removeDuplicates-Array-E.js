/* Remove Duplicates (Leetcode #26) 

- Given an array "nums" sorted in increasing order, remove duplicates in-place 

nums = [1, 1, 2] 
output = 2; nums [1, 2] 

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] 
output = 5; nums [0, 1, 2, 3, 4]

idx     0   1   2   3   4   5   6   7   8   9
num     0   0   1   1   1   2   2   3   3   4
        i   j                                   i === j; increase j only 
            i   j                               i !== j; increase i to idx 1 and set i to value of idx 2 

        0   1   1   1   1   2
            i       j                           i === j; increase j only 
            i           j                       i === j; increase j only 
            i               j                   i !== j; increase i to idx 2 and set i to value of idx 5 

        0   1   2   1   1   2   2   3               
                i               j               i === j; increase j only 
                i                   j           i !== j; increase i to idx 3 and set i to value of idx 7

        0   1   2   3   1   2   2   3   3   4
                    i                   j       i === j; increase j only 
                    i                       j   i !== j; increase i to idx 4 and set i to value of idx 9 
        
        0   1   2   3   4   2   2   3   3   4
                        i                       i + 1 should give me index 4, which is actually the length of array until i 


Brute Force -> OPTIMAL  
- initialize i at 0 to make it the first idx of array 
- loop through the array once (make j = 1, until end) 
- check: if nums[i] !== nums[j] we will increase i++ 
- also we need to replace nums[i] with nums[j] 
- return i + 1 to get the length of array until I 

Time: O(n) as we iterate over the input array once 
Space: O(1) as we don't incur extra memory 

Pseudocode 
- initialize variable pointer1 at 0 (beginning of array) 
- iterate over input array once (pointer2 starts at 1 and loops until the end) 
- check: if nums[pointer1] !== nums[pointer2] ? 
- we will increase pointer1 to next position 
- also we will replace value of nums[pointer1] with nums[pointer2] 
- return pointer1 + 1 because this is the length of array that was modified in-place 

*/ 

function removeDuplicates(nums) {
    // edge case: if input array is empty we return 0 as this is the length 
    if(nums.length === 0) return 0; 
    let pointer1 = 0; 
    for(let pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if(nums[pointer1] !== nums[pointer2]) {
            pointer1++; 
            nums[pointer1] = nums[pointer2]; 
        }; 
    };
    return pointer1 + 1; 
};