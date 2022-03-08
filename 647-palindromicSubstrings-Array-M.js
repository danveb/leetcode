/* Palindromic Substrings (Leetcode #647) 

Problem: Given a string "str", return the number of palindromic substrings in it. 

str = 'abc' 
output = 3; 'a', 'b', 'c'

str = 'aaa'
output = 6; 'a', 'a', 'a', 'aa', 'aa', 'aaa'

Scratchpad: 
idx     0   1   2   3
str     a   a   a   b
        i               => substring [a] 
        i   j           => substring [aa]
        i   j   j       => substring [aaa]
        i   j   j   j   => substring [aaab] 
            i           => substring [a]
            i   j       => substring [aa]
            i   j   j   => substring [aab]
                i       => substring [a]
                i   j   => substring [ab] 
                    i   => substring [b] 

idx     0   1   2   3
str     a   b   b   a
        L           R   => L === R; move pointers 
            L   R       => L === R; it's palindrome 

Approach (brute force) -> Time: O(n^3) 
1. countSubstrings(str)
- initialize count at 0
- initialize substring var that holds generateSubstring(str) as result array
- iterate over each substring
- check: if each substring is also a palindrome we increase count 
- return count 

2. generateSubstring(str) -> helper at O(n^2) 
- initialize result as empty array
- iterate over the str once (i at 0 until end of the strings) 
- iterate again the str (j at i + 1 until end of the strings) 
- slice the string from i to j and push to result array 
- return result array 

3. isPalindrome(str) -> helper at O(n) 
- initialize left at 0 
- initialize right at str.length - 1
- keep looping while left <= right 
- check: if str[left] !== str[right] we return false 
- move pointers: left++/right--
- return true after all checks 

*/

function countSubstrings(str) {
    let count = 0
    let substring = generateSubstring(str) 
    for(let substr of substring) {
        if(isPalindrome(substr)) {
            count++ 
        }
    }
    return count; 
}

function generateSubstring(str) {
    const result = []
    for(let i = 0; i <= str.length; i++) {
        for(let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j))
        }
    }
    return result; 
}

function isPalindrome(str) {
    let left = 0
    let right = str.length - 1
    while(left <= right) {
        if(str[left] !== str[right]) {
            return false 
        }
        // move pointers
        left++
        right--
    }
    return true 
}