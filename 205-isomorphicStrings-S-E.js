/* Isomorphic Strings (Leetcode #205) 

Problem: Given 2 strings "s" and "t" determine if isomorphic.
Strings are isomorphic if characters in "s" can be replaced to get "t". 

s = "egg" t = "add"
e -> 1, g -> 2
a -> 1, d -> 2
output = true; we replace 2 characters from both "s" and "t" 
** we have a size 2 (length of hashmap)

s = "foo" t = "bar"
f -> 1, o -> 2 
b -> 1, a -> 1, r -> 1
output = false; we replace 2 characters from "s" but need 3 from "t"
** we have a size 2 (length of hashmap) and size 3

s = "paper" t = "title"
p -> 2, a -> 1, e -> 1, r -> 1
t -> 2, i -> 1, l -> 1, e -> 1
output = true; we replace 4 characters from both "s" and "t"
** we have a size 4 (length of hashmap)

Brute Force -> PROBLEM: ONLY COUNTS SIZE OF STRINGS...
1. FrequencyCounter 
- use hashmap to count number of chars
- ** return the size of hashmap (length of hashmap)

2. isIsomorphic function 
- initialize frequencyCounters for "s" and "t" 
- check: if frequencyCounter for "s" is NOT equal to "t"? false... 
- return true

Time: O(n) where we iterate over input string once 
Space: O(n) we use a hashmap to build a frequencyCounter 

*/

// // Helper Function: FrequencyCounter 
// function freqCounter(str) {
//     // edge case: if no string return null 
//     if(str.length === 0) return null; 
//     // initialize hashmap
//     const hashmap = new Map(); 
//     for(let i = 0; i < str.length; i++) {
//         // check: if hashmap doesn't have current letter? 
//         if(!hashmap.has(str[i])) {
//             hashmap.set(str[i], 1);
//         // hashmap has current letter so we'll add 1 to its count
//         } else {
//             hashmap.set(str[i], hashmap.get(str[i]) + 1); 
//         }
//     }; 
//     // return entire hashmap
//     return hashmap; 
// }

// function isIsomorphic(s, t) {
//     // check length of both strings; if not equal we can return false rightaway
//     if(s.length !== t.length) return false; 
//     // build freqCounter for "s" and "t"
//     let freqS = freqCounter(s); 
//     let freqT = freqCounter(t); 
//     // check for size of hashmap are equal? 
//     return freqS.size === freqT.size; 
// };

// Function to check isomorphic strings
function isIsomorphic(s, t) {
    // check for length of strings; if not equal not isomorphic
    if(s.length !== t.length) return false; 
    // build a hashmap 
    const hashmap = new Map(); 
    // build a hashset -> we use to store already mapped chars of t
    const hashset = new Set(); 
    // iterate over s first 
    for(let i = 0; i < s.length; i++) {
        // take ith char from s/t
        let char1 = s.charAt(i); 
        let char2 = t.charAt(i); 
        // check: if hashmap has char1 === true? 
        if(hashmap.has(char1) === true) {
            if(hashmap.get(char1) !== char2) {
                return false; 
            }
        } else {
            // check hashset if has char2
            if(hashset.has(char2)) {
                return false 
            };
            // if none of above conditions is true both char1/char2 are appearing first time
            // we'll insert them into hashmap
            hashmap.set(char1, char2); 
            hashset.add(char2); 
        };
    };
    return true; 
}

// OPTION 2
function isIsomorphic(str1, str2) {
    // main check: if length of the strings don't match it's NOT isomorphic... 
    if(str1.length !== str2.length) return false 

    const mapStr1 = new Map() 
    const mapStr2 = new Map() 
    for(let i = 0; i < str1.length; i++) {
        let char1 = str1[i]
        let char2 = str2[i] 

        if(!mapStr1[char1]) {
            mapStr1[char1] = char2 
        }

        if(!mapStr2[char2]) {
            mapStr2[char2] = char1
        }

        if(mapStr1[char1] !== char2 || mapStr2[char2] !== char1) {
            return false 
        }
    }
    return true; 
}


console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("paper", "title"))
console.log(isIsomorphic("bbbaaaba", "aaabbbba"))