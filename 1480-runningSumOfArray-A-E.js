/* Running Sum of 1D array (Leetcode #1480) 

Problem: Given an array "nums", return the running sum of "nums" array. 

nums = [1, 2, 3, 4]
output = [1, 3, 6, 10] 

idx     0   1   2   3   
num     1   2   3   4   currentSum = 0
        i               currentSum += 1; push 1
            i               currentSum += 2; push 3
                i               currentSum += 3; push 6
                    i               currentSum += 4; push 10

Optimal 
- initialize a dummy new array so we can later push into 
- keep track of currentSum at 0 which is later increased 
- iterate over input array once 
- as we input the array we will sum current element to currentSum

Big O
- Time: O(n) where we iterate over input array once 
- Space: O(n) we create a new array to work at each step

*/ 
 
function runningSum(nums) {
    const newArr = []; 
    let currentSum = 0; 
    for(let i = 0; i < nums.length; i++) {
       currentSum += nums[i]; 
       newArr.push(currentSum); 
    }; 
    return newArr; 
}