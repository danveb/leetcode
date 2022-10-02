/* Longest Substring Without Repeating Characters (Leetcode #3) 

Problem: Given a string "s", find the length of longest substring
without repeating characters. 

str = "abcabcbb"
output = 3; "abc" is longest substring with length 3

str = "bbbb"
output = 1; "b" is the longest substring with length 1

str = "pwwkew"
output = 3; "wke" is longest substring with length 3

idx 0   1   2   3   4   5   6   7
str a   b   c   a   b   c   b   b   => hashset = new Set()
   l/r                              => add to hashset; Set { a }; max = 1
        r                           => add to hashset; Set { a,b }; max = 2
            r                       => add to hashset; Set { a,b,c }; max = 3
        l                           => delete hashset; Set { b,c }
                r                   => add to hashset; Set { b,c,a }; max = 3
            l                       => delete hashset; Set { c,a }
                    r               => add to hashset; Set { c,a,b }; max = 3
                l                   => delete hashset; Set { a,b }
                        r           => add to hashset; Set { a,b,c }; max = 3
                    l               => delete hashset; Set { b,c }
                        l           => delete hashset; Set { c }
                            r       => add to hashset; Set { c,b }; max = 2
                

abcabcbb -> all substrings
- a        - b        - c      - a     - b    - c    - b  - b
- ab       - bc       - ca     - ab    - bc   - cb   - bb
- abc      - bca      - cab    - abc   - bcb  - cbb
- abca     - bcab     - cabc   - abcb  - bcbb
- abcab    - bcabc    - cabcb  - abcbb
- abcabc   - bcabcb   - cabcbb
- abcabcb  - bcabcbb
- abcabcbb 

Notes
- we can perform all substrings 
- perform a new SET 
- initialize left/right both start at 0
- keep looping while RIGHT < length of string 
- check: if SET doesn't have current character at RIGHT 
- we'll add current character at RIGHT 
- set maxSubstring as MAX between maxSubstring and size of SET
- increase RIGHT++ 
- else we delete current character at LEFT 
- left++ 
- return maxSubstring

Time: O(n) we iterate over input string once
Space: O(n) we use a hashset 

*/

function lengthOfLongestSubstring(str) {
    // edge case: if str is empty we return 0
    if(str.length === 0) return 0; 
    const hashset = new Set(); 
    let left = 0;
    let right = 0; 
    // initialize maxSubstring at 0 
    let maxSubstring = 0; 
    while(right < str.length) {
        if(!hashset.has(str.charAt(right))) {
            hashset.add(str.charAt(right)); 
            maxSubstring = Math.max(maxSubstring, hashset.size); 
            right++; 
        } else {
            hashset.delete(str.charAt(left)); 
            left++; 
        }
    };
    return maxSubstring; 
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3