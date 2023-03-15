/* Running Sum of 1D array (Leetcode #1480) 

Problem: Given an array "nums", return the running sum of "nums" array. 

nums = [1, 2, 3, 4]
output = [1, 3, 6, 10] 

idx     0   1   2   3   
num     1   2   3   4   => currentSum = 0
        i               => currentSum += i = 1; [1]
            i           => currentSum += i = 3; [1, 3]
                i       => currentSum += i = 6; [1, 3, 6] 
                    i   => currentSum += i = 10; [1, 3, 6, 10]

1. Optimal 
- initialize a dummy new array so we can later push into 
- keep track of currentSum at 0 which is later increased 
- iterate over input array once 
- as we input the array we will sum current element to currentSum

Time: O(n) where we iterate over input array once 
Space: O(n) we create a new array to work at each step

function runningSum(nums) {
    const newArr = []; 
    let currentSum = 0; 
    for(let i = 0; i < nums.length; i++) {
       currentSum += nums[i]; 
       newArr.push(currentSum); 
    }; 
    return newArr; 
}

=== 

2. Similar Optimal 
- edge case: If "nums" is empty? we can just return []
- initialize a dummy array with first element of the array (this is the runningsum)
- iterate over input array once (i at 1 -- since dummy array has first element)
- for dummy array at [i] we know we can use [nums i] + [output i - 1] 
- return dummy array 

Time: O(n) we visit each element of input array 
Space: O(n) we have an output [] 

*/ 
 
function runningSum(nums) {
    if(nums.length === 0) return [];
    const output = [nums[0]]; 
    for(let i = 1; i < nums.length; i++) {
        output[i] = nums[i] + output[i - 1]; 
    };
    return output; 
}; 

console.log(runningSum([1,2,3,4])); 