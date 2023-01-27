/* IsSubsequence (Leetcode #392) 

Problem: Given 2 strings "s" and "t", return true if "s" is subsequence of "t".
Return false otherwise. A subsequence is formed when we can delete some letters
from original string without disturbing relative positions of remaining characters. 
"ace" is subsequence of "abcde"
"aec" is NOT subsequence of "abcde" because order is shifted

s = "abc" t = "ahbgdc"
output = true; "abc" is in order on string "ahbgdc"

s = "axc" t = "ahbgdc"
output = false; "axc" -> X is not present on string "ahbgdc"

idx     0   1   2   3   4   5
str     a   h   b   g   d   c   => subsequence at 0 used to traverse "s"
        i                       => s[0] = "a", t[0] = "a" OK; subsequence++
            i                   => s[1] = "b", t[1] = "h" -> subsequence remains at 1
                i               => s[1] = "b", t[2] = "b" OK; subsequence++
                    i           => s[2] = "c", t[3] = "g" -> subseuqnece remains at 2
                        i       => s[2] = "c", t[4] = "d" -> subsequence remains at 2
                            i   => s[2] = "c", t[5] = "c" OK; subsequence++

Brute Force
- main goal is to check if letters from "s" are in order with "t"
- we can initialize two pointers to check if they're in order and have same letter
- initialize subsequence counter at 0
- iterate over "t" string until end 
- check: if s[subsequence] is equal to t[i] ? we increase subsequence by 1
- else we keep subsequence remaining at same number 
- final return: subsequence === s.length 

Time: O(n) where n is length of "t" string
Space: O(1) we don't incur extra memory

*/

function isSubsequence(s, t) {
    let subsequence = 0; 
    for(let i = 0; i < t.length; i++) {
        if(s[subsequence] === t[i]) {
            subsequence++; 
        };
    };
    return subsequence === s.length; 
}; 

console.log(isSubsequence("abc", "ahbgdc"));