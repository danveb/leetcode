/* Max Product Subarray (Leetcode #152) 

Problem: Given an array "nums", find a contiguous non-empty subarray within the array that has the largest product and return it. 

nums = [2, 3, -2, 4] 
output = 6; [2, 3] are contiguous and have largest product of 6

nums = [-2, 0, -1] 
output = 0

Approach -> Time: O(n) where n is # of elements in array
- initialize output as the first value of array 
- initialize max, min at 1 
- iterate over the array once
- initialize tempMax as product of max & num 
- initialize tempMin as product of min & num 
- initialize conditions as tempMax, tempMin, num 
- set max as maximum in conditions array 
- set min as minimum in conditions array 
- set output as the max between output and max
- return output 

*/ 

function maxProduct(nums) {
    let output = nums[0]
    let max = 1;
    let min = 1;
    
    for (let num of nums) {
      let tempMax = max * num
      let tempMin = min * num
      let conditions = [tempMax, tempMin, num]
      
      max = Math.max(...conditions)
      min = Math.min(...conditions)
      
      output = Math.max(output, max)
    }
    return output
}
  

console.log(maxProduct([2,3,-2,4])) // 6
console.log(maxProduct([-2, 0, -1])) // 0
console.log(maxProduct([-3, -1, -1])) // 3
console.log(maxProduct([0, 2])) // 2!!!!!