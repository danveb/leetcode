/* Remove Element (Leetcode #27)

Problem: Given an array "nums" and integer "val", remove all occurrences of "val". 
Then return the number of elements which are NOT equal to "val". 

nums = [3, 2, 2, 3] val = 3
output = 2; because we removed all "val" in the array

1. Very Brute Force (fails test case)
- use a new array as output 
- we iterate input array once (i at 0 until end)
- if current element !== val? we push to output []
- return output.length since we know all val's have been removed 

Time: O(n) where n is length of input array
Space: O(n) we create an output [] 

function removeElement(nums, val) {
    if(nums.length === 0) return 0; 
    const output = [];
    for(let i = 0; i < nums.length; i++) {
        // check: If current element !== val 
        if(nums[i] !== val) {
            output.push(nums[i]); 
        };
    };
    return output; 
}

===

idx     0   1   2   3
num     3   2   2   3   val = 3
        i/j             -> j === 3; skip
            j           -> j !== 3, swap 3 with 2, increase i++

        2   3   2   3
            i   j       -> j !== 3; swap 3 with 2, increase i++

        2   2   3   3
                i   j   -> j === 3; skip 

2. Brute Force 
- use 2 pointer approach (i/j) where we iterate on "j", while "i" remainst at 0
- in case current element at "j" !== val? 
-- swap nums[j] with nums[i]
-- increase i++
- return i

Time: O(n) where n is length of input array
Space: O(1) we don't incur extra memory 

*/ 

function removeElement(nums, val) {
    if(nums.length === 0) return 0; 
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        // check if nums[j] not equal to val
        // if so we will make the switch with nums[i] and increase i
        if(nums[j] !== val) {
            nums[i] = nums[j]; 
            i++; 
        }
    };
    return i; // already at index 2
}