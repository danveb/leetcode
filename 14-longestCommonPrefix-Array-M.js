/* Longest Common Prefix (Leetcode #14)

Problem: Find the longest common prefix string from an array of strings. 
If there's no common prefix return empty string "". 

strs = ["flower", "flow", "flight"] 
output = "fl" these two letters are always present in each string 

strs = ["dog", "racecar", "car"] 
output = "" there is no common prefix here 

Approach 
- initialize longestPrefix as empty strings 
- iterate over input array of strings once (i at 0 until end)
- initialize character as strs[0][i] 
- iterate over input array again (j at 0 until end) 
- check: if strs[j][i] !== character ? 
-- return longestPrefix 
- outside j loop we set longestPrefix as longestPrefix + character
- return longestPrefix

Time: O(n^2) as we have nested for loops 
Space: O(1) we don't require extra memory

*/ 

function longestCommonPrefix(strs) {
    // edge case: if array is empty return "" 
    if(strs.length === 0) return ""; 
    // initialize longestPrefix as empty strings
    let longestPrefix = ""; 
    for(let i = 0; i < strs.length; i++) {
        // get the ith character from strs[0] 
        const character = strs[0][i] // f, l, o, undefined
        // iterate j loop from 0 until end 
        for(let j = 0; j < strs.length; j++) {
            // check: if strs[j][i] is not equal to the character we'll return longestPrefix
            if(strs[j][i] !== character) return longestPrefix;         
        }
        // set longestPrefix 
        longestPrefix = longestPrefix + character; 
    }  
    return longestPrefix; 
}