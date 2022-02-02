/* Leetcode #125: Valid Palindrome

Problem: Given a string "str" return true if it's a palindrome or false otherwise. 

str = 'A man, a plan, a canal: Panama' 
output = true; "amanaplanacanalpanama" is a palindrome 

str = 'race a car' 
output = true; "raceacar" is not a palindrome 

Scratchpad: 
idx 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20
str a   m   a   n   a   p   l   a   n   a   c   a   n   a   l   p   a   n   a   m   a
    l                                                                               r   => a === a, move pointers inward
        l                                                                       r       => m === m, move pointers inward
            l                                                               r           => a === a, move pointers inward
                l                                                       r               => n === n, move pointers inward
                    l                                               r                   => a === a, move pointers inward
                        l                                       r                       => p === p, move pointers inward
                            l                               r                           => l === l, move pointers inward
                                l                       r                               => a === a, move pointers inward 
                                    l               r                                   => n === n, move pointers inward
                                        l       r                                       => a === a, move pointers inward 
                                           l/r                                          => c/c 

Time: O(n) 
Space: O(n) 

Notes: use regex and 2 pointers that will move inwards
- convert any uppercase to lowercase 
- use regex to remove any colons, spaces 
- initialize left at 0 
- initialize right at end of str
- keep looping while left is less than equal to right pointer 
- check: if str[left] !== str[right] return false
- separately increase/decrease pointers 
- return true in the end

*/ 

function isPalindrome(str) {
    str = str.toLowerCase() 
    str = str.replace(/[^A-Za-z0-9]/g, '')
    let left = 0
    let right = str.length - 1 
    while(left <= right) {
        if(str[left] !== str[right]) {
            return false 
        }
        // move pointers inward 
        left++
        right-- 
    }
    return true; 
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))