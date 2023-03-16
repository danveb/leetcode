/* Reverse String (Leetcode #344) 

Problem: Given an array of strings "s", reverse the string. 
Modify array in-place with O(1) extra memory. 

s = ['h', 'e', 'l', 'l', 'o']
output = ['o', 'l', 'l', 'e', 'h']

idx     0   1   2   3   4 
str     h   e   l   l   o
        l               r   => swap "h" with "o" ['o', 'e', 'l', 'l', 'h'] 
            l       r       => swap "e" with "l" ['o', 'l', 'l', 'e', 'h'] 
                l/r         

        -----------------
output  o   l   l   e   h 

2. Optimal Approach
- use a two pointer approach where left/right pointers will meet in middle 
- initialize left at 0
- initialize right at s.length - 1
- keep looping while left <= right
- old school swap
-- set s[left] to s[right]
-- set s[right] to s[left]
-- set s[left] back to temp 
-- keep moving pointers ++, -- since while loop
- return [] 

Time: O(n) where n is length of input array
Space: O(1) we don't incur extra memory

*/ 

function reverseString(str) {
    // edge case: if str array is empty [] 
    if(str.length === 0) return [];
    // initialize 2 pointers running in opposite directions
    let left = 0;
    let right = str.length - 1;
    while(left <= right) {
        // old school swap
        let temp = str[left];
        str[left] = str[right]; 
        str[right] = temp; 
        // move pointers to keep moving 
        left++
        right--
    };
    return str; 
}