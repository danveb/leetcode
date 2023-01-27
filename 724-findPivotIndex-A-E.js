/* Find Pivot Index (Leetcode #724)

Problem: Given an array "nums", calculate pivot index of the array. 
Pivot index is the index where sum of all numbers to left of index is equal to sum of all numbers to the index's right. 
Return leftmost pivot index; else return -1 

nums = [1, 2, 3]
output = -1; there's no index satisfying conditions 

nums = [1, 7, 3, 6, 5, 6]
output = 3; pivot index at idx3; left: 11; right: 11

Brute Force 
- initialize leftSum at 0
- initialize rightSum at 0
- iterate over input array once (i at 0 until end)
- increase rightSum by each of the nums[i] 
- another for loop where we iterate input array again 
- initialize current as nums[i]
- subtract current from rightSum 
- check: if leftSum and rightSum are equal? we know it's at pivot index
- if we don't find pivot we keep increasing left with current
- nothing? just return -1

Time: O(n) we iterate input array
Space: O(1) we don't incur extra memory

*/ 

function pivotIndex(nums) {
    // initialize leftSum & rightSum at 0
    let leftSum = 0;
    let rightSum = 0;
    // calculate rightSum for total sum of array 
    for(let i = 0; i < nums.length; i++) {
        rightSum += nums[i]; 
    };

    // iterate again input array 
    for(let i = 0; i < nums.length; i++) {
        // initialize current as current value of nums[i]
        let current = nums[i]; 
        // subtract rightSum with current
        rightSum -= current; 
        // check: if leftSum === rightSum we know it's at index
        if(leftSum === rightSum) return i; 
        // else we continue increasing leftSum with current
        leftSum += current; 
    }; 
    // return -1 if nothing is found
    return -1; 
};