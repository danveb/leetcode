/* Find Peak Element (Leetcode #162) 

Problem: Given an array "nums", find a peak element and return its index. 
A peak is an element that is strictly greater than its neighbors 

nums = [1, 2, 3, 1] 
output = 2; peak is 3 at index 2 

nums = [1, 2, 1, 3, 5, 6, 4] 
output = 5; peak is 6 at index 5 

Scratchpad: 

idx 0   1   2   3   
num 1   2   3   1
    i               => i < i + 1; so keep looping 
        i           => i < i + 1; so keep looping 
            i       => i > i + 1; we found the peak 
            
Approach (brute force) -> Time: O(n), where n is the number of elements in the array 
- iterate over entire "nums" array 
- main check: if value of current position is greater than value of next position? 
- we have found the peak 
- edge case: perhaps the peak can be located at the end of "nums" array, so in that case we return the last element of array 

*/ 

// function findPeakElement(nums) {
//     // initialize n as length of array (we'll use this if the peak is at the end of array) 
//     let n = nums.length
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] > nums[i + 1]) {
//             return i 
//         }
//     }
//     // return the last element of array 
//     return n
// }

/* 

idx 0   1   2   3   4   5   6
num 0   1   2   3   2   1   0
    L           M           R  => M at 3; M > M + 1 so we're at peak 
    
idx 0   1   2   3   4   5   6
num 0   2   1   3   5   6   4
    L           M           R  => M at 3; M < M + 1 so we should look to the right (set L to be M + 1) 
                    L   M   R  => M at 6; so we have to check the Left value too (set R to be M) 
                    LM  R      => M at 5; so we should look to the right (set L to be M + 1) 
                        LMR    => M at 6 again; return its index

Approach (optimal/binary search) -> Time: O(log n) for performing binary search, where half of input is gone after each search
- initialize left pointer at beginning of array 
- initialize right pointer at end of array 
- keep looping while LEFT < RIGHT 
- initialize mid as the average between L/R 
- check: if value of current position is > value of next position? 
- R = MID 
- else L = MID + 1 
- return L 

*/

function findPeakElement(nums) {
    let left = 0
    let right = nums.length -1
    while(left < right) {
        let mid = Math.floor((left+right)/2)
        if(nums[mid] > nums[mid + 1]) {
            right = mid 
        } else {
            left = mid + 1
        }
    }
    return left; 
}