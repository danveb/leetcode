/* Number of Steps to Reduce to Zero (Leetcode #1342) 

Problem: Given an integer "num", return number of steps 
to reduce to zero. 
1. if number is even? divide by 2 
2. if number is odd? subtract by 1 

num = 14
output = 6
1. 14 is even so divide by 2 = 7
2. 7 is odd so subtract by 1 = 6
3. 6 is even so divide by 2 = 3
4. 3 is odd so subtract by 1 = 2
5. 2 is even so divide by 2 = 1
6. 1 is odd so divide by 1 = 0 

1. Brute Force 
- keep track of count = 0
- while num !== 0 we want to keep looping 
- if num % 2 === 0 we divide num by 2; count++
- if num % 2 === 1 we subtract num by 1; count++
- if num === 0 return count

Time: O(log n) as our input integer decreases by half when divided by 2
Space: O(1) we don't incur extra memory

*/ 

function numberOfSteps(num) {
    let count = 0;
    while(num > 0) {
        if(num % 2 === 0) {
            num /= 2; 
            count++; 
        }
        if(num % 2 === 1) {
            num -= 1;
            count++; 
        }
    };
    return count;
}