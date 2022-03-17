/* Fibonacci Number (Leetcode #509) 

Problem: Fibonacci sequence, such that each number is the sum of the two proceeding ones. 

n = 2 
output = 1; fib(2) -> fib(1) + fib(0) = 1 

n = 3
output = 2; fib(3) -> fib(2) + fib(1) = 2 

n = 4
output = 3; fib(4) -> fib(3) + fib(2) = 3

Scratchpad: 

F(0) = 0
F(1) = 1
F(2) = 1 + 0 = 1
F(3) = 1 + 1 = 2
F(4) = 2 + 1 = 3 
F(5) = 3 + 2 = 5 
F(6) = 5 + 3 = 8
** fib(n-1) + fib(n-2) 

Approach (recursive) -> Time: O(2^n) / Space: O(n) 
- base case: if n === 0 we return 0
- base case: if n === 1 we return 1
- return fib(n-1) + fib(n-2) 

idx     0   1   2   3   4   5
dp[i]   0   1   1   2   3   5
        i                       => dp[0] = 0
            i                   => dp[1] = 1
                i               => dp[2] = 1 + 0 = 1
                    i           => dp[3] = 1 + 1 = 2 

Approach (Dynamic Programming) -> Time: O(n) / Space: O(1) 
- bottom-up dynamic programming: fill a one-dimensional table DP where each entry at index "i" represents value of Fibonacci number at index "i". The last element of array is the result we want to return. The order of filling matters because we need to calculate dp[i-1] and dp[i-2] first before dp[i]
- initialize dp Array and fill with n+2 
- initialize dp[0] as 0 
- initialize dp[1] as 1
- iterate (i=2 until equal to n) 
- set dp[i] as dp[i-1] + dp[i-2]
- return dp[n]

*/ 

// recursive... 
// function fib(n) {
//     if(n === 0) return 0
//     if(n === 1) return 1
//     return fib(n-1) + fib(n-2) 
// }

// iterative
function fib(n) {
    // declare dp as Array to store Fibonacci numbers
    const dp = new Array(n+2) 
    dp[0] = 0
    dp[1] = 1
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}