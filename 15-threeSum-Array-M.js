/* Three Sum (Leetcode #15) 

Problem: Given an array "nums", return all triplets [nums[i], nums[j], nums[k]] such that i !== j, i !== k, j !== k. And nums[i] + nums[j] + nums[k] === 0 

nums = [-1, 0, 1, 2, -1, -4] 
output = [[-1, -1, 2], [-1, 0, 1]] 

nums = [] 
output = [] 

nums = [0]
output = [] 

Scratchpad: 
idx     0   1   2   3   4   5 
num     -1  0   1   2   -1  -4
        i   j   k               

idx     0   1   2   3   4   5
num     -3  3   4   -3  1   2
numSort -3  -3  1   2   3   4
         i  L               R   => initially i at 0; L at i + 1; R at end of array 
         i      L           R   => i + L + R > 0; R-- 
         i      L       R       => i + L + R > 0; R-- 
         i      L   R           => i + L + R === 0; return [nums[i], nums[left], nums[right]] 

idx     0   1   2   3   4   5
num     -1  0   1   2   -1  -4
numSort -4  -1  -1  0   1   2
        i   L               R   => initially i at 0; L at i + 1; R at end of array 
        i       L           R   => i + L + R < 0; L++ 
        i           L       R   => i + L + R < 0; L++ 
        i               L   R   => i + L + R < 0; iterate i again 
            i   L           R   => i + L + R === 0; return [nums[i], nums[left], nums[right]] 
            i       L       R   => i + L + R > 0; R-- 
            i       L   R       => i + L + R === 0; [nums[i], nums[left], nums[right]] 
                i   L       R   => i + L + R > 0; R-- 
                i   L   R       => i + L + R === 0; BUT THIS IS A DUPLICATE! 
                    i   L   R   => i + L + R > 0
                    
Approach (brute force) -> Time: O(n^3) because we run loops 3 times but main issue is we are going to get duplicates. NEED TO FIND A MORE EFFICIENT SOLUTION! 
- initialize triplets as empty array 
- iterate over array once (i = 0 until end) 
- iterate over array again (j = i + 1 until end) 
- iterate over array again (k = j + 1 until end) 
- check: if i + j + k === 0 we push these values to triplets array 
- return triplets

Approach (more optimal) -> Time: O(n log n) for sorting + O(n^2) = O(n^2) 
                        -> Space: O(1) or O(n) because sorting takes extra memory in certain languages
- first sort the array in ascending order -> we will see a duplicate where we can skip it if we already calculated 
- initialize triplets as empty array 
- iterate over the array once (i at 0 until end) 
- CHECK FOR DUPLICATES NOW: if i > 0 && nums[i] === nums[i - 1] continue 
- initialize left at 0 
- initialize right at nums.length - 1
- while LEFT < RIGHT: 
- let threesum = nums[left] + nums[right] 
- check: if threeSum > 0 ? right--
- check: if threeSum < 0 ? left++ 
- else: threeSum === 0 ? triplets.push([nums[i], nums[left], nums[right]]) 
- increase left pointer to keep looping other elements in array 
- keep looping only the left while: nums[left] === nums[left - 1] && left < right ? left++ 
- return triplets array 

*/ 

// Time: O(n^3) for running 3 loops but we does not work because we don't take care of duplicates
// function threeSum(nums) {
//     const triplets = [] 
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             for(let k = j + 1; k < nums.length; k++) {
//                 if(nums[i] + nums[j] + nums[k] === 0) {
//                     triplets.push([nums[i], nums[j], nums[k]])
//                 }
//             }
//         }
//     }
//     return triplets; 
// }

// Time: O(n^2) 
function threeSum(nums) {
    nums.sort((a, b) => a - b) 
    const triplets = [] 
    for(let i = 0; i < nums.length; i++) {
        let left = i + 1 
        let right = nums.length - 1
        if(i > 0 && nums[i] === nums[i - 1]) continue // condition to remove duplicates! 
        while(left < right) {
            let threesum = nums[i] + nums[left] + nums[right] 
            if(threesum > 0) {
                right-- 
            } else if(threesum < 0) {
                left++ 
            } else {
                // threesum === 0! 
                triplets.push([nums[i], nums[left], nums[right]]) 
                // increase left pointer to keep it looping! 
                left++ 
                // keep looping only the left 
                while(nums[left] === nums[left - 1] && left < right) {
                    left++ 
                }
            }
        }
    }
    return triplets; 
}

console.log(threeSum([-3, 3, 4, -3, 1, 2]))
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-2, 0, 0, 2, 2]))