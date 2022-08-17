/* First Unique Character in String (Leetcode #387)

Problem: Given a string "s" find the first non-repeating character in it and return its index. If it does not exist return -1. 

s = "leetcode"
output = 0; l is the first non-repeating character 

s = "loveleetcode"
output = 2; v is the first non-repeating character 

s = "aabb" 
output = -1; all characters are repeating 

idx     0   1   2   3   4   5   6   7
str     l   e   e   t   c   o   d   e
        i                               => hashmap.set(s[i], 1) 
            i                           => hashmap.set(s[i], 1) 
                i                       => hashmap.set(s[i], hashmap.get(s[i]) + 1))
                    i                   => hashmap.set(s[i], 1) 
                        i               => hashmap.set(s[i], 1) 
                            i           => hashmap.set(s[i], 1) 
                                i       => hashmap.set(s[i], 1) 
                                    i   => hashmap.set(s[i], hashmap.get(s[i]) + 1))
                                        hashmap { l: 1, e: 3, t: 1, c: 1, 0: 1, d: 1 }

Approach 
- initialize a new hashmap 
- iterate over input string once (i at 0 until end) 
- if hashmap doesn't have current element ? 
- set current element and add to hashmap with counter 1
- else we will increase its count by 1 

- iterate over input string one more time (i at 0 until end) 
- initialize letter var as str[i]
- check: if hashmap.get(letter) === 1 ? 
- return index 
- return -1

Time: O(n) we visit the length of string N 2 times 
Space: O(1) with hashmap 

*/ 

function firstUniqChar(s) {
    const hashmap = new Map(); 
    // iterate over input string 
    for(let i = 0; i < s.length; i++) {
        if(!hashmap.has(s[i])) {
            hashmap.set(s[i], 1)
        } else {
            hashmap.set(s[i], hashmap.get(s[i]) + 1); 
        }
    }
    
    // Iterate over the string one more time 
    for(let i = 0; i < s.length; i++) {
        const letter = s[i]; 
        if(hashmap.get(letter) === 1) return i; 
    }
    return -1; 
}

console.log(firstUniqChar("leetcode")); 