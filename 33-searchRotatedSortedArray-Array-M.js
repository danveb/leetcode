/* Given an integer array "nums" sorted in ascending order (with distinct values), it is possibly rotated at an unknown pivot index "k". With this array "nums" and integer "target", return the index of "target" if it's in "nums". Return -1 if target not found. Write an algorithm in O(log n) time. 

nums = [4, 5, 6, 7, 0, 1, 2] target = 0
output = 4; target is present at index 4 

nums = [4, 5, 6, 7, 0, 1, 2] target = 3 
output = -1; target is NOT present in "nums" array 

Scratchpad: 
target  0
idx     0   1   2   3   4   5   6
num     4   5   6   7   0   1   2
        L           M           R   => since nums[mid] > nums[left] we know section from LEFT -> MID is sorted. NEED TO CHECK RIGHT SIDE! 
                        L   M   R   => M at 1; it's still not the target; keep searching 
                        LMR         => M at target 

Notes: 
- perform a modified binary search on a "rotated" array
- given on "nums" array we know half of the array is ALWAYS SORTED 
- if "target" is within sorted half of array we just perform a basic binary search 
- otherwise we discard sorted half array and keep examining unsorted half 
- main key is VALUE of MID can be in sorted order, while right side is NOT sorted 

Time: O(log n) as we perform binary search
Space: O(1) 

*/ 

function search(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left+right)/2) 
        // final check: if nums[mid] meets the target we found it we can return it 
        if(nums[mid] === target) {
            return mid; 
        }

        // CHECK: LEFT SIDE IS SORTED
        // if nums[left] is less than or equal to nums[mid] ? 
        // we know left side is sorted but right side is NOT 
        if(nums[left] <= nums[mid]) {
            // also check if target is within nums[left] and nums[mid] 
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // RIGHT SIDE IS SORTED 
            // check if target is within nums[mid] and nums[right] 
            if(nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
}

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 5))