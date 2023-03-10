/* Concatenation of Array (Leetcode #1929) 

Problem: Given an array "nums", create an array "ans" of length 2n, 
where ans[i] == nums[i] and ans[i + n] = nums[i]. Return "ans"

nums = [1, 2, 1]
output = [1, 2, 1, 1, 2, 1] 

idx     0   1   2
num     1   2   1   
        i           => [1]
            i       => [1, 2]
                i   => [1, 2, 1]
        j           => [1, 2, 1, 1]
            j       => [1, 2, 1, 1, 2]
                j   => [1, 2, 1, 1, 2, 1]

1. Brute Force
- use 2 loops (i, j)
- i will run from 0 until end 
- j will run from 0 until end 
- keep pushing elements to output array   

Approach
- edge case: if nums array is empty we return [] 
- iterate over input array once (i at 0 until end)
- push elements at nums[i]
- iterate over input array again (j at 0 until end) 
- push elements at nums[j]
- return output array 

Time: O(n) where we visit each element of array and push to output 
Space: O(n) we use an array to store output of elements 

=== 

2. Another Brute Force?
- use concat method between the array 

function getConcatenation(nums) {
    return nums.concat(nums); 
}; 

*/ 

function getConcatenation(nums) {
    if(nums.length === 0) return [];
    const output = [];
    for(let i = 0; i < nums.length; i++) {
        output.push(nums[i]); 
    };

    for(let j = 0; j < nums.length; j++) {
        output.push(nums[j]); 
    };
    return output; 
}