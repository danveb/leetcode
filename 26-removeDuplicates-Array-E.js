/* Remove Duplicates from Sorted Array (Leetcode #26) 

Problem: Given an array "nums" sorted in ascending order, 
remove duplicates in-place such that each unique element 
appears only once. 
Constraint: O(1) space complexity

nums = [1, 1, 2]
output = 2; nums = [1, 2, _]

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
output = 5; nums = [0, 1, 2, 3, 4, _, _, _, _, _]

idx 0   1   2   3   4   5   6   6   7   8
num 0   0   1   1   1   2   2   3   3   4
    p1  i                                   => initialize i at 0; j at 1 
            i                               => increase i to idx 1; set nums[i] = nums[j] 
    
    0   1   1   1   1   2   2   3   3   4
        p1  i                               => i === j; skip
        p1      i                           => i === j; skip
        p1          i                       => i === j; skip
            p1          i                   => increase i to idx 2; set nums[i] = nums[j] 
    
    0   1   2   1   1   2   2   3   3   4
            p1          i                   => i === j; skip
            p1              i               => i === j; skip
                p1              i           => increase i to idx 3; set nums[i] = nums[j]
                
    0   1   2   3   1   2   2   3   3   4
                p1              i           => i === j; skip
                p1                  i       => i === j; skip
                    p1                  i   => increase i to idx 4; set nums[i] = nums[j] 
                    
    0   1   2   3   4   _   _   _   _   _
                    p1

Approach 
- edge case: if array is empty we return 0
- initialize pointer1 at 0
- iterate from i at 1 until end 
- check: if p1 === i we skip 
- check: if p1 !== i increase p1 first; set nums[p1] to nums[i] 
- return length of the array -> p1 + 1 to get length 

Time: O(n) where n is length of input array
Space: O(1) we don't incur extra memory

*/ 

function removeDuplicates(nums) {
    // edge case: if array is empty return 0
    if(nums.length === 0) return 0;
    let pointer1 = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[pointer1] !== nums[i]) {
            pointer1++; 
            nums[pointer1] = nums[i]; 
        }
    };
    return pointer1 + 1; 
}