/* Find Minimum in Rotated Sorted Array (Leetcode 153 - Medium) 

Problem: A sorted array is rotated at an unknown pivot. 
[10, 20, 30, 40, 50] -> [30, 40, 50, 10, 20] 
Find the index of the minimum element in this array 

Restate problem: given a rotated array find the index of the minimum element. 

array = [30, 40, 50, 10, 20] 
output = 3; the smallest element is 10 and its index is 3 

array = [3, 5, 7, 11, 13, 17, 19, 2] 
output = 7; the smallest element is 2 and its index is 7 

array = [4, 5, 6, 7, 0, 1, 2] 
output = 0; the smallest element is 2 and its index is 4

Scratchpad: 

idx 0   1   2   3   4 
num 30  40  50  10  20
    L       M       R   => M > R so we're going to switch L = MID + 1 
                LM  R   => M at index 3...

idx 0   1   2   3   4   5   6
num 4   5   6   7   0   1   2   
    L           M           R   => M > R so we'll switch L = MID + 1 
                    L   M   R   => M < R but we do know there's a smaller value so we should set R = MID 
                    LM  R       => M is now the smallest value in the array so return its index
                    LMR         => loop quits as we're L === R 

Time: O(log n) -> we perform discrete binary search 
Space: 

Notes: BRUTE FORCE -> O(n) using linear search
- using Math.min return the lowest element of the array (using SPREAD operator) 

*/

// function findMin(array) {
//     let minimum = Infinity 
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] < minimum) {
//             minimum = array[i] 
//         }
//     }
//     return minimum; 
// }

// console.log(findMin([30, 40, 50, 10, 20]))

/* 

Notes: OPTIMAL -> O(log n) using discrete binary search 
- Pattern: check increasing pattern -> sharp decrease -> increasing again. 
- initialize a left pointer at 0 
- initialize a right pointer at end of the array 
- keep looping while left < right pointer (change left/right index how we compare things) 
- initialize a midpoint 
- CHECK: if nums[mid] > nums[right] we should adjust our left because it does NOT work 
- ELSE: set right pointer to be equal to MID 
- return array[left] 

*/ 

function findMin(array) {
    let left = 0
    let right = array.length - 1

    while(left < right) {
        let mid = Math.floor((left + right)/2) 
        if(array[mid] > array[right]) {
            left = mid + 1 
        } else {
            right = mid 
        }
    }
    return array[left]
}

console.log(findMin([30, 40, 50, 10, 20])); // 10 is the lowest value 
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0 is the lowest value 