/* Concatenation of Array (Leetcode #1929) 

Problem: Given an array "nums", create an array of length 2n.
"ans" output [] is the concatenation of 2x "nums".

nums = [1, 2, 1]
output = [1, 2, 1, 1, 2, 1]

nums = [1, 3, 2, 1]
output = [1, 3, 2, 1, 1, 3, 2, 1] 

idx     0   1   2
num     1   2   1   
        i           => [1]
            i       => [1, 2]
                i   => [1, 2, 1]
        j           => [1, 2, 1, 1]
            j       => [1, 2, 1, 1, 2]
                j   => [1, 2, 1, 1, 2, 1]

1. Brute Force 
- as we iterate the array once we want to push each element to output []

Algorithm
- edge case: if nums array is empty? return []
- initialize ans []
- iterate over input array once (i at 0 until end) 
- for each element at i we'll push to ans []
- iterate over input array again (j at 0 until end)
- for each element at j we'll push to ans [] 
- return ans [] 

Time: O(n^2) we visit each element at least twice to create output []
Space: O(n) we use an array as output 

function getConcatenation(nums) {
    if(nums.length === 0) return [];
    const ans = [];
    for(let i = 0; i < nums.length; i++) {
        ans.push(nums[i]); 
    };
    for(let j = 0; j < nums.length; j++) {
        ans.push(nums[j]); 
    };
    return ans; 
}; 

===

2. Can we do better? 
- we want to iterate over input array once 
- when setting each value inside ans[] we are going to work simultaneously 
- if nums [1, 2, 3]
           X. Y. Z 
- ans [1, 2, 3, 1, 2, 3] 
       X.       X
          Y        Y
             Z        Z

Algorithm
- edge case: same as above 
- initialize ans []
- iterate over input array once (i at 0 until end)
- set ans[i] to be nums[i] -> copy exactly 
- set ans[i + nums.length] to be nums[i] -> copy exactly 
- return ans[] 

Time: O(n) where n is length of input array
Space: O(n) we output ans[] 

*/ 

function getConcatenation(nums) {
    if(nums.length === 0) return [];
    // initialize ans[] with length double of nums 
    const ans = [];  
    for(let i = 0; i < nums.length; i++) {
        ans[i] = nums[i]; 
        ans[i + nums.length] = nums[i]; // index 3, 4, 5 to be set as 0 1 2
    };
    return ans; 
}; 