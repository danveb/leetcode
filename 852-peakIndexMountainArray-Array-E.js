/* Peak of Mountain Array (Leetcode #852) 

A mountain array is defined as an arrayy that: 
- has at least 3 elements 
- let's call the element with the largest value the "peak" with index "k". The array elements monotonically increase from the first element to A[k], and then monotonically decreases from A[k + 1] to the last element of the array, thus creating a "mountain" of numbers. 

Problem: Find the index of the peak element. Assume theres only 1 peak element. 

array = [0, 1, 2, 3, 2, 1, 0] 
output = 3; the largest element is 3 and its index is 3 

Scratchpad: 

idx 0   1   2   3   4   5   6
num 0   1   2   3   2   1   0
    L           M           R   => M is at 3 (array[i] > array[i + 1] we know it's high)

idx 0   1   2   3  
num 0   2   1   0
    L   M       R  => M is at 2 (array[i] > array[i + 1] we know it's high)

Time: O(log n) -> we perform discrete binary search 

Explanation: 
The peak element is always larger than the next element. Applying the filter of arr[i] > arr[i + 1] we get a boolean array. A minor edge case is for the last element as it has no next element. In that case, we assume its next element is negative infinity.

Notes: OPTIMAL -> O(log n) using discrete binary search 
- Pattern: check increasing pattern -> decreasing again: we know for sure array[i] will be greater than array[i + 1]

*/ 

function peakIndexInMountainArray(arr) {
    let left = 0
    let right = arr.length - 1
    let boundary_index = -1
    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        if (mid === arr.length - 1 || arr[mid] >= arr[mid + 1]) {
            boundary_index = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return boundary_index;
}

console.log(peakIndexInMountainArray([0, 1, 2, 3, 2, 1, 0])) // 3
console.log(peakIndexInMountainArray([0,2,1,0])) // 1
console.log(peakIndexInMountainArray([1,2,3,4,1])) // 3
console.log(peakIndexInMountainArray([0, 10, 3, 2, 1, 0])) // 1