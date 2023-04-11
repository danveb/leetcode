/* Best Time To Buy Stock I (Leetcode #121) 

Problem: given an array "prices" where prices[i] is price of a given stock
on ith day. we want to maximize profit by choosing single day to buy a stock
and sell on any day in the future. Return max profit we can achieve. 

prices = [7, 1, 5, 3, 6, 4] 
output = 5; buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 6-1 = 5 

prices = [7, 6, 4, 3, 1] 
output = 0; no transactions are done and max profit = 0 

idx     0   1   2   3   4   5
num     7   1   5   3   6   4
        i   j                   => 1 - 7 = -6; maxP = 0
        i       j               => 5 - 7 = -2; maxP = 0
        i           j           => 3 - 7 = -4; maxP = 0
        i               j       => 6 - 7 = -1; maxP = 0
        i                   j   => 4 - 7 = -3; maxP = 0
            i   j               => 5 - 1 = 4; maxP = 4
            i       j           => 3 - 1 = 2; maxP = 4
            i           j       => 6 - 1 = 5; maxP = 5
            i               j   => 4 - 1 = 3; maxP = 5
                i   j           => 3 - 5 = -2; maxP = 5
                i       j       => 6 - 5 = 1; maxP = 5
                i           j   => 4 - 5 = -1; maxP = 5
                    i   j       => 6 - 3 = 3; maxP = 5
                    i       j   => 4 - 3 = 1; maxP = 5
                        i   j   => 4 - 6 = -2; maxP = 5

1. Brute Force
- perform a nested for loop (i / j) where we calculate j - i (currentProfit)
- we compare currentProfit (j - i) with maxProfit 
- if currentProfit > maxProfit -> we set maxProfit to currentProfit 

Algorithm
- edge case: if prices [] maxProfit of 0
- initialize currentP at 0
- initialize maxP at 0
- iterate over input array once (i at 0 until end)
- iterate over input array again (j at i + 1 until end) 
- set currentP to nums[j] - nums[i] 
- set maxP as MAX between currentP and maxP
- return maxP 

Time: O(n^2) where we perform a nested for loop 
Space: O(1) we don't incur extra memory 

function maxProfit(prices) {
    if(prices.length === 0) return 0; 
    let currentP = 0;
    let maxP = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            currentP = prices[j] - prices[i]; 
            // maxP = Math.max(currentP, maxP)
            // OR 
            if(currentP > maxP) maxP = currentP; 
        }
    }
    return maxP; 
}

===

idx     0   1   2   3   4   5
num     7   1   5   3   6   4
        mB  i                   => currentP = 1 - 7 = -6; minB = MIN(1, 7) = 1; maxP = 0
            mB  i               => currentP = 4; minB = 1; maxP = 4
            mB      i           => currentP = 2; minB = 1; maxP = 4
            mB          i       => currentP = 5; minB = 1; maxP = 5
            mB              i   => currentP = 3; minB = 1; maxP = 5

2. Optimal
- set minBuy as first element of the array since we have to buy anyway
- we want to iterate over input array from index 1 until end 

Algorithm 
- initialize minB to first element of array 
- initialize currentP at 0
- initialize maxP at 0
- iterate over input array (i at 1 until end) 
- set currentP = i - mB 
- set maxP to MAX between currentP, maxP 
- set minB to MIN between minB, nums[i] 
- return maxP 

Time: O(n) where "n" is the length of input array 
Space: O(1) we don't incur extra memory

*/ 

function maxProfit(prices) {
    if(prices.length === 0) return 0; 
    let minB = prices[0];
    let currentP = 0;
    let maxP = 0; 
    for(let i = 1; i < prices.length; i++) {
        currentP = prices[i] - minB; 
        // maxP = Math.max(currentP, maxP); 
        if(currentP > maxP) maxP = currentP; 
        // minB = Math.min(minB, prices[i]); 
        if(prices[i] < minB) minB = prices[i]; 
    };
    return maxP; 
}