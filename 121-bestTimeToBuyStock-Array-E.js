/* Leetcode #121: Best Time To Buy Stock I 

Problem: Given an array "prices" where prices[i] is the price of a given stock on the ith day. 
Maximize profit by choosing a single day to buy one stock and choose a different day to sell that stock. 
Return the maximum profit from this transaction. 
If we can't achieve any profit return 0. 

prices = [7, 1, 5, 3, 6, 4] 
output = 5; buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 6-1 = 5 

prices = [7, 6, 4, 3, 1] 
output = 0; no transactions are done and max profit = 0 

Scratchpad: 
day 1   2   3   4   5   6
idx 0   1   2   3   4   5
num 7   1   5   3   6   4
    i                       => buying at 7 is too high... potentially we might find something lower later 
        i                   => price is 1 on second day so ideally buy at lowest 
            i               => price on day 3 is high but we can wait; potentially our profit would be 4 if we sell 
                i           => price on day 4 is lower than previous day 
                    i       => price on day 5 is the highest and we can sell; potentially profit would be 5 
                        i   => price on day 6 is lower than day 5 

Time: O(n) per n elements of prices array 
Space: O(n) 

Notes: 
- buy low and sell high for max profit 
- initialize minBuy as the first stock we buy from the array 
- initialize maxP at 0 
- iterate over prices array once (start from idx 1) 
- initialize sellPrice at prices[i] 
- initialize profit as the difference between sell/buy 
- set maxProfit as the maximum between maxProfit and current profit 
- set minBuy as the minimum between minBuy and current price 
- return maxP 

*/

function maxProfit(prices) {
    let minBuy = prices[0]  
    let maxP = 0
    for(let i = 1; i < prices.length; i++) {
        let sellPrice = prices[i] 
        let profit = sellPrice - minBuy 
        maxP = Math.max(maxP, profit) 
        minBuy = Math.min(minBuy, prices[i])
    }
    return maxP; 
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([3, 1, 9, 4, 5])) 