/* Product of Array Except Self (Leetcode #238)

Problem: Given an integer array "nums", return an array such that answer[i] is equal to the product of all elements of nums except nums[i]. 
Write an algorithm that runs in O(n) without division operation. 

nums = [1, 2, 3, 4]
output = [24, 12, 8, 6] 

nums = [-1, 1, 0, -3, 3]
output = [0, 0, 9, 0, 0]

idx 0   [X, 2, 3, 4]    X * 2 * 3 * 4 = 24 => most common is X as 1
idx 1   [1, X, 3, 4]    1 * X * 3 * 4 = 12
idx 2   [1, 2, X, 4]    1 * 2 * X * 4 = 8
idx 3   [1, 2, 3, X]    1 * 2 * 3 * X = 6

idx     0   1   2   3   
num     1   2   3   4   => X = 1
        i/j             => i === j; skip 
        i   j           => i !== j; X * 2 = 2
        i       j       => i === 1, skip; j === 3; 2 * 3 = 6
        i           j   => i === 1; skip; j === 4; 6 * 4 = 4

1. Brute Force 
- use nested for loops (i/j) to iterate over input array and multiply 
- keep track of variable "product" as 1
- condition: if i === j? we skip as we don't use index
- condition: if i !== j? we can multiply product by nums[j] 
- after "j" iteration we can push to output 

Algorithm 
- edge case: if nums array is empty return [] 
- initialize output [] 
- iterate over input array once (i at 0 until end)
- iterate over input array again (j at 0 until end) -> both start at 0 since we are going to iterate later everything
- if: i === j? continue the loop; 
- multiply product by current element at "j" 
- push product to output []
- return output []

Time: O(n^2) for nested for loop 
Space: O(n) we store all elements in output array 

=== 

Optimal 
nums = [1, 2, 3, 4]
        i  
           i
               i
                  i
leftNums = [1, 1, 1, 1]
            i            -> to the left is just 1 [1]
               i.        -> to the left is just 1 [1, 1]
                  i.     -> to the left is just 2 [1, 1, 2]
                      i. -> to the left is just 6 [1, 1, 2, 6] 
            
            
rightNums = [1, 1, 1, 1] 
                      i  -> to the right is just 1 [1]
                   i     -> to the right is just 4 [4, 1]
                i        -> to the right is just 12 [12, 4, 1]
             i           -> to the right is just 24 [24, 12, 4, 1]

output = [24, 12, 8, 6] 

- initialize output array as new Array with 1's 
- initialize leftNums as new Array with 1's (new Array(array.length).fill(1))
- initialize rightNums as new Array with 1's (new Array(array.length).fill(1))
- work on leftNums: 
-- leftProduct at 1 (gets updated)
-- for loop entire nums array 
-- swap leftNums[i] with leftProduct  
-- leftProduct *= nums[i] (holds runningProduct)

- work on rightNums: 
-- rightProduct at 1 (gets updated)
-- reverse for loop (start at length - 1)
-- swap rightNums[i] with rightProduct 
-- rightProduct *= nums[i] (holds runningProduct)

- work on final output array 
- for loop nums array 
output[i] = leftNums[i] * rightNums[i]
- return output

Time: O(n)
Space: O(1) 

*/

function productExceptSelf(nums) {
    if(nums.length === 0) return [];
    const output = []; 
    const leftNums = new Array(nums.length).fill(1); 
    const rightNums = new Array(nums.length).fill(1); 

    // leftNums array
    let leftProduct = 1;
    for(let i = 0; i < nums.length; i++) {
        leftNums[i] = leftProduct; 
        leftProduct *= nums[i]; 
    }

    // rightNums array
    let rightProduct = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        rightNums[i] = rightProduct;
        rightProduct *= nums[i]; 
    }; 

    // output Array 
    for(let i = 0; i < nums.length; i++) {
        output[i] = leftNums[i] * rightNums[i]; 
    };
    
    return output;
}