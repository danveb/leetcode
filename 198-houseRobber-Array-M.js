/* House Robber (Leetcode #198) 

Problem: Given array "nums" representing amount of moneey at each house, return the max amount we can rob. 
Note adjacent houses have automatic alarms so it's possible the house we try to rob may trigger the alarm. 

nums = [1, 2, 3, 1] 
output = 4; we rob house 1 (money = 1) and rob house 3 (money = 3). 3 + 1 = 4

nums = [2, 7, 9, 3, 1]
output = 12; rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). 2 + 9 + 1 = 12 
            
idx     0   1   2   3
num     5   50  7   10  => initialize a running sum in Array 
        i               => [5]
            i           => [5, 50] 
                i       => [5, 50, 50] 
                    i   => [5, 50, 50, 60]
                    
idx     0   1   2   3   4
num     $8  $1  $3  $10 $7
        i                   => max we can rob is $8 [8]
            i               => max we can rob is $8 or $1, better rob $8 [8, 8] 
                i           => we can rob $3 and add to $8 robbed from house 1 [8, 8, 11]
                    i       => we can rob $10 and add to $8 robbed from house 1 [8, 8, 11, 18]
                        i   => we can rob $7 and add to $11 robbed so far [8, 8, 11, 18, 18]

Approach DYNAMIC PROGRAMMING -> Time: O(n) / Space: O(1) 
- edge case: if length of nums array is === 0 we return 0
- edge case: if length of nums array is < 2 we return MAX of nums array 
- initialize dp array as size of nums array and filled with 0's 
- initialize dp[0] as first element of nums array 
- initialize dp[1] as MAX nums[0], nums[1]
- iterate over nums array (from 2nd index onwards until end) 
- set dp[i] as MAX dp[i-1], nums[i] + dp[i-2]
- return the last value which is the HIGHEST of dp array 

*/ 

function rob(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    // initialize dp array filled with 0's 
    const dp = Array(nums.length).fill(0) 
    // base case for 1st house
    dp[0] = nums[0] 
    // base case for 2nd house (maximum between 1st and 2nd house because we can't have adjacent houses)
    dp[1] = Math.max(nums[0], nums[1])
    // iterate from the 3rd house onwards
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]) 
    }
    // return the last value of the array (highest of dp)
    return dp[dp.length - 1] 
}