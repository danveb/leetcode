/* Search in Rotated Sorted Array (Leetcode #33) 

Problem: Given an integer array "nums" sorted in ascending order, it's possibly rotated at
unknown pivot index "K". With integer "target", return index if present in "nums". Else 
return -1. Try to aim for O(log n) time. 

nums = [4, 5, 6, 7, 0, 1, 2] target = 0
output = 4; target is present at index 4 

nums = [4, 5, 6, 7, 0, 1, 2] target = 3 
output = -1; target is NOT present in "nums" array 

idx     0   1   2   3   4   5   6
num     4   5   6   7   0   1   2   target = 0
        i                           => i !== 0; move 
            i                       => i !== 0; move
                i                   => i !== 0; move
                    i               => i !== 0; move
                        i           => i === 0; return index 4

1. Brute Force
- perform linear search on input array
- we iterate over input array and check if current element at ith iteration meets target

Algorithm
- edge case: if nums array is empty return -1 
- iterate over input array once (i at 0 until end) 
- check: if current element is equal to target? 
- return its index; else return -1 

Time: O(n) where n is length of input array
Space: O(1) we don't incur extra memory 

function search(nums, target) {
    if(nums.length === 0) return -1; 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) return i; 
    };
    return -1; 
}

=== 

idx     0   1   2   3   4   5   6
num     4   5   6   7   0   1   2   target 0
        L           M           R   => since nums[mid] > nums[left] we know section from LEFT -> MID is sorted. NEED TO CHECK RIGHT SIDE! 
                        L   M   R   => M at 1; it's still not the target; keep searching 
                        LMR         => M at target 

2. Optimal 
-  array is sorted in ascending order, but rotated at unknown pivot -> modified binary search
- we know half of array is ALWAYS SORTED
- if target is within sorted half of array we perform basic binary search
- otherwise we discard sorted half array and keep examining unsorted half 
- main key is VALUE of MID can be in sorted order, while right side is NOT sorted 

Time: O(log n) where n is decreased half the time per iteration
Space: O(1) we don't incur extra memory 

*/ 

function search(nums, target) {
    if(nums.length === 0) return -1; 
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left+right)/2); 

        // easy: if nums[mid] is target? we return mid 
        if(nums[mid] === target) return mid; 

        // check for left sorted portion? 
        if(nums[left] <= nums[mid]) {
            // check: is target present here? 
            if(nums[left] <= target && target < nums[mid]) {
                // shift right to mid - 1 
                right = mid - 1
            } else {
                left = mid + 1; 
            }
        } 
        // check for right sorted portion? 
        if(nums[mid] <= nums[right]) {
            // check: is target present here? 
            if(nums[mid] < target && target <= nums[right]) {
                // shift left to mid + 1
                left = mid + 1; 
            } else {
                right = mid - 1; 
            }
        }
    };
    return -1; 
}

console.log(search([4,5,6,7,0,1,2], 0)); 
console.log(search([5,1,3], 3))