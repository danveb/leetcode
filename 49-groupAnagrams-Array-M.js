/* Group Anagrams (Leetcode #49)

Problem: Given an array of strings "strs", group the anagrams together. 
Return in any order. 

strs = ["eat","tea","tan","ate","nat","bat"]
output = [["bat"],["nat","tan"],["ate","eat","tea"]]

strs = [""]
output = [[""]]

strs = ["a"]
output = [["a"]]

idx     0       1       2       3       4       5   
str     "eat"   "tea"   "tan"   "ate"   "nat"   "bat"
sort    "aet"   "aet"   "ant"   "aet"   "ant"   "abt"
        i                                               => OBJ doesn't have "aet"; set idx 0 [["eat"]]
                i                                       => OBJ has "aet" so we'll push it [["eat", "tea"]] 
                        i                               => OBJ doesn't have "ant"; set idx 1 [["eat", "tea"], ["tan"]]
                                i                       => OBJ has "aet" so we'll push it [["eat", "tea", "ate"], ["tan"]]
                                        i               => OBJ has "ant" so we'll push it [["eat", "tea", "ate"], ["tan", "nat"]]
                                                i       => OBJ doesn't have "abt"; set idx 2 [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

Recap
- array of strings "strs" with words 
- need to find anagrams and push them to the output array 

Notes 
- sort array of strings alphabetically by mapping the string
-- split the array, sort, and join back ['aet', 'aet', 'ant', 'aet', 'ant', 'abt']
- initialize a hashmap as OBJ 
- iterate over sorted array 
- check: if OBJ doesn't have current sorted[i]? 
- we'll want to set [strs[i]] in the OBJ 
- else: it means OBJ has current sorted[i] so we'll push strs[i] to OBJ 
- after iterating we'll return the values of hashmap 

Time: O(n log n) for sorting the array of strings + O(n) to iterate over array of strings = O(n * n log n) 
Space: O(n) we use an object to store output  

*/ 

function groupAnagrams(strs) {
    // edge case: if strs is empty we'll return empty [[""]] 
    if(strs.length === 0) return [[""]]; 
    // manually sort the array of strings and sort it 
    let sortedStrs = strs.map((str) => str.split("").sort().join("")); 
    // initialize a hashmap OBJ 
    const obj = {}; 
    // iterate over input array of sorted strings 
    for(let i = 0; i < sortedStrs.length; i++) {
        // check: if obj doesnt have sortedStrs[i] ? 
        if(!obj[sortedStrs[i]]) {
            // we'll set it to the object in array
            obj[sortedStrs[i]] = [strs[i]]
        // else: it means obj HAS sortedStrs[i] so we'll push strs[i] 
        } else {
            obj[sortedStrs[i]].push(strs[i]);     
        }
    }
    // return values of obj 
    return Object.values(obj); 
}