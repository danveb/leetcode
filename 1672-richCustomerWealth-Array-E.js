/* Richest Customer Wealth (Leetcode #1672) 

Problem: Given an m * n grid "accounts" where accounts[i][j] is 
amount of money the "ith" customer has in "jth" bank, return 
the maximum wealth the richest customer has. 

accounts = [[1, 2, 3], [3, 2, 1]]
output = 6; 
1. wealth of 6 -> both are richest with wealth of 6
2. wealth of 6 -> both are richest with wealth of 6

accounts = [[1, 5], [7, 3], [3, 5]]
output = 10; 
1. wealth of 6
2. wealth of 10 -> richest wealth of 10 
3. wealth of 8

1. Brute Force 
- use a nested for loop (i, j) keeping track of elements in accounts array 
- keep track of maxWealth and inner currentWealth, add accounts[i][j] 
- check: maxWealth is the MAX between maxWealth and currentWealth

Time: O(n * m) because we have a nested array 
Space: O(1) we don't incur extra memory 

*/ 

function maximumWealth(accounts) {
    if(accounts.length === 0) return 0; 
    let maxWealth = 0; 
    for(let i = 0; i < accounts.length; i++) {
        let currentWealth = 0; 
        for(let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j]; 
        };
        if(currentWealth > maxWealth) {
            maxWealth = currentWealth
        } 
    };
    return maxWealth; 
}