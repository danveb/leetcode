/* Climbing Stairs (Leetcode #70) 

n = 1
output = 1
1 step 

n = 2
output = 2
1 step + 1 step
2 steps

n = 3
output = 3
1 step + 1 step + 1 step
1 step + 2 step
2 step + 1 step 

1. Brute Force 
- recursively we can calculate number of stairs 

Algorithm
- base case: if n === 1 we know it takes 1 step
- recursively n-1 + n-2

Time: O(n^2) we calculate subproblems multiple times
Space: O(1) 

function climbStairs(n) {
    if(n === 0 || n === 1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2); 
}; 

===

2. Optimal
- initialize prev1 at 1
- initialize prev2 at 1
- initialize current; 
- iterate i from 2 until <=n 
- set current to prev1 + prev2 
- prev2 = prev1
- prev1 - current 
- return current

Time: O(n) 
Space: O(1) 

*/ 

function climbStairs(n) {
    if(n === 0 || n === 1) return 1; 
    let prev1 = 1;
    let prev2 = 1;
    let current; 
    for(let i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    };
    return current; 
}