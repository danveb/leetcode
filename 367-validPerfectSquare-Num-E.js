/* Valid Perfect Square (Leetcode #367) 

Problem: Given a positive integer "num", return true if num is 
a perfect square. Otherwise return false. 

num = 16 
output = true; because 4*4 = 16 and 4 is an integer

num = 14
output = false; because 3.742*3.742 = 14 but 3.742 is NOT integer

1. Brute Force 
- use Math.sqrt method on num; if this is divisible by 2 we know it's perfect 
- return false otherwise 

2. Better Brute Force 
- initialize for loop (i at 1 until num/2 inclusive) because we want num/2 * num/2 = num 
- check: if i * i === num? we have found it so return true
- return false otherwise 

Time: O(n) 
Space: O(1) we don't incur extra memory

function isPerfectSquare(num) {
    if(num === 0) return false; 
    for(let i = 1; i <= num/2; i++) {
        if(i * i === num) return true; 
    };
    return false; 
}; 

=== 

idx 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14
num 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  
    L                           M                           R   => M*M = 49, so we should look lower than this 
    L       M               R                                   => M*M = 4, so we should look higher 
                L   M       R                                   => M*M = 16, so look lower 
                LMR                                             => M*M = 9, but there's no other numbers to check; return false 

3. Optimal 
- perform binary search with 2 pointers from 0 to num 
- if middle value * mid === num? we know it's perfect square so return it
- if mid * mid > num? check lower; right = mid - 1
- if mid * mid < num? check higher; left = mid + 1 
- return false... 

Approach
- edge case: if num is 0? return false rightaway 
- initialize left point at 0 
- initialize right point at num 
- keep looping while left <= right 
- initialize mid as average between left/right points /2 
- check: if mid * mid === num? return true 
- check: if mid * mid > num? right = mid - 1
- check: if mid * mid < num? left = mid + 1
- return false 

Time: O(log n) we perform binary search and our input decreases by half 
Space: O(1) we don't incur extra memory

*/ 

function isPerfectSquare(num) {
    if(num === 0) return false; 
    let left = 0; 
    let right = num; 
    while(left <= right) {
        let mid = Math.floor((left+right)/2); 
        // check
        if(mid * mid === num) {
            return true 
        } else if(mid * mid > num) {
            right = mid - 1; 
        } else {
            left = mid + 1; 
        }
    };
    return false; 
}