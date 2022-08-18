/* Quicksort Algorithm 

Notes
- select the last element as the pivot
- we should traverse the array 
- swap elements in the list into 2 sides: smaller than pivot to left; greater than pivot to right
- swap pivot with first element of the side that is larger or equal to pivot. 
- recursively sort left/right

idx     0   1   2   3   4
num     5   3   1   2   4   => pivot at idx 4
        L           R   p   => L >= pivot, R < pivot so we'll switch L with R

        2   3   1   5   4
            L           p   => L < R so ok 
                L       p   => L < R so ok; we know pivot should be to the LEFT of 5 as its < 5
            
        2   3   1   4   5
                    p       => pivot at idx 4 is OK 
        L       R/p         => L >= pivot, so we should switch L with pivot 

        1   3   2   4   5
            L   R/p         => L >= pivot, so we should siwtch L with pivot 

        1   2   3   4   5   = quickSorted array

=============================

                nums = [-6, 20, 8, -2, 4] 

                LEFT        PIVOT       RIGHT 
                -6, -2         4           8, 20    => pivot at 4 and separate LEFT vs. RIGHT 
                                                    => we need to partition LEFT & RIGHT so we work on pivot again (PIVOT ALWAYS END OF ARRAY) 

left    pivot   right                   left    pivot   right 
-6       -2       -                      8       20       -     => when each element is partitioned we will have to concatenate

        -6      -2           4       8       20 => we concatenate left array, merge with pivot and, concatenate right array 
                
                
                    -6      -2       4       8       20  => this brings us the quickSorted array 

=============================

nums = [10,20,30,-1,-2]
LEFT        pivot       RIGHT
-1           -2          10, 20, 30

LEFT                    left         pivot    
-1                       10, 20        30

Approach
// BASE CASE: GOES HERE 
- initialize pivot as the last element of array 
- initialize a left array 
- initialize a right array 
- iterate input array (i at 0 until length of array - 1 because we already have the pivot at end) 
- check current element if it's less than pivot ? 
- push current element to left array 
- else we'll push current element to right array 
- we'll return [...quickSort(left), pivot, ...quickSort(right)] // this is recursive so we need a base case at top of function
// BASE CASE: if length of array is < 2 we'll just return the array 

Worst case Time complexity
- O(n^2) 
- O(log n) for space complexity

Average Time complexity IS WHAT MATTERS FOR THIS ALGORITHM!!!!!!!!
- O(log n) for recursively partitioning an array into smaller subarrays + O(n) for for loop = O(n log n) 
- O(log n) for space complexity

=============================

Approach #2 
- same algorithm without extra space for subarrays

*/

// Approach #1 
function quickSort(array) {
    // BASE CASE FOR RECURSION: 
    if(array.length < 2) {
        return array; 
    }
    // initialize pivot as the last element of the array 
    let pivot = array[array.length - 1]; 
    // initialize left subarray
    const left = []; 
    // initialize right subarray 
    const right = []; 
    // iterate over input array once (i at 0 until end of array - 1 because we already have a pivot)
    for(let i = 0; i < array.length - 1; i++) {
        // case: if current element is < pivot? we push to left 
        if(array[i] < pivot) {
            left.push(array[i]); 
        // case: if current element is > pivot? we push to right 
        } else {
            right.push(array[i]); 
        }; 
    }
    // recursive: with spread operator we'll combine quickSort(left), pivot and quickSort(right) subarrays
    return [...quickSort(left), pivot, ...quickSort(right)]; 
}; 

console.log(quickSort([-6, 20, 8, -2, 4])); 
console.log(quickSort([10,20,30,-1,-2])); 
console.log(quickSort([1,20,30,1,2])); 


// Approach #2 
// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//       const pivot = partition(arr, left, right)
//       quickSort(arr, left, pivot - 1)
//       quickSort(arr, pivot + 1, right)
//     }
//     return arr
// }
  
// function partition(arr, left, right) {
//     const pivot = arr[right]
//     let i = left
//     for (let j = left; j < right; j++) {
//         if (arr[j] < pivot) {
//             swap(arr, i, j)
//             i++
//         }
//     }
//     swap(arr, i, right)
//     return i
// }
  
// function swap(arr, i, j) {
//     const temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }
  
// const arr = [8, 20, -2, 4, -6]
// console.log(quickSort(arr)); 
// console.log(arr) // [-6, -2, 4, 8, 20]