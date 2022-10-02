/* Find Peak Element (Leetcode #162) 

Problem: Given a 0-indexed array "nums", find peak element and return
its index. A peak is strictly greater than its neighbors. 

nums = [1, 2, 3, 1]
output = 2; peak is 3 at idx 2

nums = [1, 2, 1, 3, 5, 6, 4]
output = 5; peak is 6 at idx 5

idx 0   1   2   3   
num 1   2   3   1
    i               => i < i + 1; so keep looping 
        i           => i < i + 1; so keep looping 
            i       => i > i + 1; we found the peak 
            
Brute Force (linear search) 
- perform linear search over input array
- iterate over input array once (i at 0 until end) 
- check: if value of current position is > next position? we find peak
- edge case: peak could be located at end of "nums", so we return last item

Time: O(n) where n is # elements in input array
Space: O(1) we don't incur extra memory

function findPeakElement(nums) {
    // edge case: if empty array we return -1
    if(nums.length === 0) return -1; 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i + 1]) {
            return i; 
        }
    }; 
    // last edge case: if peak is at end we return last element
    return nums.length-1;
}

=== 

idx 0   1   2   3
num 1   2   3   1
    L   M       R   => M === 2; M > M + 1 so at peak

idx 0   1   2   3   4   5   6
num 0   2   1   3   5   6   4
    L           M           R   => M = 3; M < M + 1 so L = M + 1
                    L   M   R   => M = 6; R = MID 
                    LM  R       => L = M + 1
                        lmr     => M === 6

Optimal (binary search)
- initialize left at 0
- initialize right at end of array
- keep looping while left <= right
- initialize midpoint as average between (left+right)/2
- check: if value of current > next ? 
- RIGHT = MID 
- else LEFT = MID + 1
- return LEFT

Time: O(log n) where we perform binary search and input gets halfed
Space: O(1) 

*/

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length-1;
    while(left < right) {
        let mid = Math.floor((left+right)/2); 
        if(nums[mid] > nums[mid + 1]) {
            right = mid; 
        } else {
            left = mid + 1; 
        }
    }; 
    return left; 
}