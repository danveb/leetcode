/* First and Last Position of Element in Sorted Array (Leetcode #34) 

Problem: Given array of integers "nums" sorted in ascending order, find the start/end position of given value. If target is not found return [-1, -1] 

nums = [5, 7, 7, 8, 8, 10] target = 8
output = [3, 4] 

Scratchpad: 
idx     0   1   2   3   4   5
num     5   7   7   8   8   10
        i   i   i   i           => find first target [3] 
        i   i   i   i   i       => find second target [4] 
                                => output [3, 4] 

idx     0   1   2   3   4   5
num     5   7   7   8   8   10
        L       M           R   => L/R at opposites; M < target so move L = M + 1 
                    L   M   R   => M at target but we want L/R to both land at 8 
                    LM  R       => shift R to M; L/R at target 
        
Approach (brute force) -> Time: O(n) 
- initialize output as empty array 
- iterate over nums
- check: if current element meets target we push this to output 
- return ternary operation: does output have any indices? if YES we return output; NO we return [-1, -1]

Approach (optimal) -> Time: O(2 * log n) => O(log n) because we implement binary search twice! 
1. searchRange(nums,target)
- initialize left and pass same arguments 
- initialize right and pass same arguments 
- return [left, right] 

2. binarySearchLeft(nums,target)
- initialize left at beginning of array
- initialize right at end of array 
- initialize index (boundary) at -1 
- keep looping while left <= right 
- initialize mid as average between (left+right)/2 
- MAIN CHECK TO FIND LEFT: if nums[mid] >= target we move R = M - 1
- ELSE L = M + 1 
- BOUNDARY CHECK: if nums[mid] === target set index as the midpoint 
- return index

3. binarySearchRight(nums,target)
- initialize left at beginning of array
- initialize right at end of array 
- initialize index (boundary) at -1 
- keep looping while left <= right 
- initialize mid as average between (left+right)/2 
- MAIN CHECK TO FIND RIGHT: if nums[mid] <= target we move L = M + 1
- ELSE R = M - 1
- BOUNDARY CHECK: if nums[mid] === target set index as the midpoint 
- return index

*/ 

function searchRange(nums, target) {
    let left = bsLeft(nums, target) 
    let right = bsRight(nums, target)
    return [left, right] 
}

function bsLeft(nums, target) {
    let left = 0
    let right = nums.length - 1
    let index = -1
    while(left <= right) {
        let mid = Math.floor((left+right)/2) 
        // KEY TO FINDING LEFT!
        if(nums[mid] >= target) {
            right = mid - 1
        } else {
            left = mid + 1
        }

        if(nums[mid] === target) index = mid
    }
    return index; 
}

function bsRight(nums, target) {
    let left = 0
    let right = nums.length - 1
    let index = -1
    while(left <= right) {
        let mid = Math.floor((left+right)/2) 
        // KEY TO FINDING RIGHT!
        if(nums[mid] <= target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
        if(nums[mid] === target) index = mid
    }
    return index; 
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) 
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)) 
console.log(searchRange([], 0)) 
console.log(searchRange([1], 1)) 
console.log(searchRange([1,3], 1))