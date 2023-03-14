/* Find Minimum in Rotated Sorted Array (Leetcode #153) 

Problem: Given a sorted rotated array "nums", return the minimum element of the array. 

array = [30, 40, 50, 10, 20] 
output = 3; the smallest element is 10 and its index is 3 

array = [3, 5, 7, 11, 13, 17, 19, 2] 
output = 7; the smallest element is 2 and its index is 7 

array = [4, 5, 6, 7, 0, 1, 2] 
output = 0; the smallest element is 2 and its index is 4

idx     0   1   2   3   4   5   6
num     4   5   6   7   0   1   2
        L           M           R   => initialize left/right pointers; mid between left and right 
                                    => we know minimum is 0 (idx4) so we should check right side 
                                    => if(nums[mid] > nums[right]) -> left = mid + 1 
                        L   M   R   => nums[mid] NOT greater than nums[right] -> right = mid
                        LM  R       => just return nums[left]

1. Brute Force #1 
- use Math.min built-in method to return lowest element (...spread) 

2. Brute Force #2 
- keep track of MIN element at Infinity 
- as we iterate over input array check if current element at I < MIN? 
- if so we set MIN to current element at I 

Time: O(n) where n is length of input array 
Space: O(1) we don't incur additional memory 

function findMinElement(nums) {
    let minimum = Infinity 
    for(let i = 0; i < array.length; i++) {
        if(array[i] < minimum) {
            minimum = array[i] 
        }
    }
    return minimum; 
}

OR 

function findMinIndex(nums) {
    let idx = 0;
    let min = Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i]; 
            idx = i; 
        }
    };
    return idx; 
}

===

Notes: OPTIMAL -> O(log n) using discrete binary search 
- Pattern: check increasing pattern -> sharp decrease -> increasing again. 
- initialize a left pointer at 0 
- initialize a right pointer at end of the array 
- keep looping while left < right pointer (change left/right index how we compare things) 
- initialize a midpoint as the average of left/right 
- CHECK: if nums[mid] > nums[right] ? left = mid + 1 
- else right = mid 
- return array[left] 

*/ 

function findMin(array) {
    let left = 0
    let right = array.length - 1

    while(left < right) {
        let mid = Math.floor((left + right)/2) 
        if(array[mid] > array[right]) {
            left = mid + 1;  
        } else {
            right = mid; 
        }
    }
    return array[left];
}