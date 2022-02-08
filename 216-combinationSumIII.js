/* Combination Sum III (Leetcode #216)

Problem: Find all valid combination of "k" numbers that sum up to "n" such that the following are true: 
- only numbers 1 - 9 
- each number used at most once 
Return a list of ALL possible valid combinations. 

k = 3, n = 7
output = [[1,2,4]]; with "k" numbers we need to meet the sum "n"

k = 3, n = 9 
output = [[1, 2, 6], [1, 3, 5], [2, 3, 4]]; with "k" numbers we need to meet the sum "n"

Scratchpad: 

array of 1-9 numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
                        i                           => given i at 0 we can use all the numbers 


                    []
    |   |   |   |   |   |   |   |   |   
    1   2   3   4   5   6   7   8   9
    |
    12, 13, 14, 15, 16, 17, 18, 19
    |
    123, 124, 125...


Approach: 
- "slate" is an empty array 
- global result is an empty array 
- implement with DFS helper function for backtracking purpose 
- we determine we're at a leaf level when length of the numbers equals to "K" 
- we check: if sum of numbers equals "N"? if so we will push to result 
- return global result in the end 

*/ 

function combinationSum3(k, n) {
    // initialize global result as empty array 
    const result = [] 

    const nums = [] 
    for(let i = 1; i <= 9; i++) {
        nums.push(i)
    }

    // dfs recursive helper 
    function dfs(i, nums, k, n, slate) {
        // backtracking case
        // if sum > n? we need to backtrack 
        if(n < 0) return 

        // base case
        if(slate.length === k) {
            // check if n === 0
            if(n === 0) {
                result.push(slate.slice())
            }
            return; 
        }

        // dfs recursive case
        for(let j = i; j < nums.length; j++) {
            slate.push(nums[j])
            dfs(j + 1, nums, k, n - nums[j], slate) 
            slate.pop()
        }
    }
    dfs(0, nums, k, n, []) 
    return result; 
}

console.log(combinationSum3(3, 7))