/* Valid Palindrome (Leetcode #125) 

Problem: Given a string "str" return true if it's a palindrome or false otherwise. 
A palindrome is a string where all uppercase letters are converted to lowercase, 
all non-alphanumeric chars are removed and is read same forward/backward. 

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

1. Brute Force / Optimal
- perform 2 pointer approach where we run pointers from opposite ends
- using a helper function to cleanStr where we turn all to lowercase and remove non-alphanumeric chars 

Algorithm
- edge case: if string is empty we can return false since it's NOT palindrome 
- initialize cleanedStr var and call cleanStr function 
- initialize left pointer at 0
- initialize right pointer at end of cleanStr 
- keep looping while left < right
- check: if current char at left !== current char at right ? we return false rightaway 
- keep left++ 
- keep right-- 
- return true... since it's a palindrome 

** helper function cleanStr(s)
- initialize newStr as empty str
- initialize chars as "abcdefghijklmnopqrstuvwxyz0123456789"
- iterate over the string once (i at 0 until end) 
- initialize lowercaseStr to convert each character into lowercase 
- check: if chars.indexOf(lowercaseStr) !== -1 ? meaning we can find it! 
- we'll build newStr += lowercaseStr 
- return newStr 

Time: O(n) where "n" is length of input string + O(n) for checking for non-alphanumeric characters when building newStr
Space: O(1) we don't incur extra memory

*/ 

function isPalindrome(s) {
    if(s.length === 0) return false; 
    let cleanedStr = cleanStr(s); 
    // initialize pointers left/right
    let left = 0;
    let right = cleanedStr.length - 1; 
    while(left < right) {
        // check for !== 
        if(cleanedStr[left] !== cleanedStr[right]) {
            return false; 
        };
        left++
        right--
    };
    return true; 
}

// helper function 
function cleanStr(str) {
    let newStr = ""; 
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789"; 
    for(let i = 0; i < str.length; i++) {
        let lowerStr = str[i].toLowerCase(); 
        if(chars.indexOf(lowerStr) !== -1) {
            newStr += lowerStr; 
        }
    };
    return newStr; 
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false