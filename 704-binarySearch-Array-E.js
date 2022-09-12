/* Binary Search (Leetcode #704)

Problem: Given an array of integers "nums" sorted in ascending order, and a target, write a function to search "target". 
Return its index if it exists. If not return -1. 

nums = [-1, 0, 3, 5, 9, 12] target = 9
output = 4

idx     0   1   2   3   4   5
num     -1  0   3   5   9   12
        i                       => i !== target; keep going 
            i                   => i !== target; keep going 
                i               => i !== target; keep going 
                    i           => i !== target; keep going 
                        i       => i === target; return idx 4

Brute Force
- perform a linear search, where we check if any of our numbers matches target
- we iterate only once with variable i 
- check: if element of i equals target we return its index
- return -1 if target is not found

Time: O(n) where n is # of elements in array 
Space: O(1) we don't incur extra memory

===

Optimal
- since array is sorted in ascending order we can perform binary search with 2 pointers and a mid point 
- iterate over the array until we find the target
- initialize mid as average between left/right pointers / 2
- check: if current element is > target ? right = mid - 1
- else if element is < target ? left = mid + 1 
- else return mid idx as we found the target 
- return -1 if target is not found 

Time: O(log n) where each iteration we continue to half the input array
Space: O(1) we don't incur extra memory

idx     0   1   2   3   4   5
num     -1  0   3   5   9   12
        L       M           R   => M < target; we will move L = M + 1
                    L   M   R   => M === target; return idx 4

*/ 

function binarySearchBrute(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i; 
        }
    }
    return -1; 
}

console.log(binarySearchBrute([-1, 0, 3, 5, 9, 12], 9)); // 4 

function binarySearch(nums, target) {
    // edge case: if array is empty return -1
    if(nums.length === 0) return -1; 
    let left = 0;
    let right = nums.length - 1; 
    while(left <= right) {
        let mid = Math.floor((left + right) / 2); 
        if(nums[mid] < target) {
            left = mid + 1; 
        } else if(nums[mid] > target) {
            right = mid - 1; 
        } else {
            return mid; 
        }
    }
    return -1; 
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4