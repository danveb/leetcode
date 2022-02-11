/* Valid Perfect Square (Leetcode #367) 

Problem: Given a positive integer "num", return True if "num" is a perfect square.
Else return false. Don't use built-in functions such as sqrt 

num = 14 
output = false 

Scratchpad: 

idx 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14
num 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  
    L                           M                           R   => M*M = 49, so we should look lower than this 
    L       M               R                                   => M*M = 4, so we should look higher 
                L   M       R                                   => M*M = 16, so look lower 
                LMR                                             => M*M = 9, but there's no other numbers to check; return false 
                
Approach -> Time: O(log n) as we perform binary search and remove half of n elements per iteration
- perform binary search from 0-num 
- initialize left/right and mid pointers 
- while looping, check if mid*mid === num; if so return true 
- if mid*mid < num; we should set left = mid + 1
- else mid*mid > num so set right = mid - 1
- after exhausting all options we should return false... 

*/ 

function isPerfectSquare(num) {
    let left = 0
    let right = num 
    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        if(mid*mid < num) {
            left = mid + 1
        } else if(mid*mid > num) {
            right = mid - 1
        } else {
            return true; 
        }
    }
    return false; 
}

console.log(isPerfectSquare(14))