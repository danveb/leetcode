/* Valid Anagram (Leetcode #242) 

Problem: Given 2 strings "str1" "str2", return true if T is anagram of S. 
Return false if otherwise 

str1 = 'anagram' 
a: 3
n: 1
g: 1
r: 1
m: 1

str2 = 'nagaram'
a: 3
n: 1
g: 1
r: 1
m: 1

Approach 
- prepare a frequency counter and get a map of each one 
- then check if length of these two match
- check if all letters are equal 

Notes: implement frequency counter for str1/str2
- main check: if str1 and str2 don't have same length we should return false 
- create frequencyCounter for str1/str2 
- iterate over the keys of str1Frequency 
- check: if size of the maps are different we should return false 
- check: if str2Freq.get(keys) !== str1Freq.get(keys) we should return false 
- else return true as we found they're valid anagram

FrequencyCounter function (str) 
- initialize frequencies as a new Map() 
- iterate each letter of the str
- check: if hashmap doesn't have current letter? 
- set current letter to hashmap and include 1 as count 
- else: set current letter to hashmap again and increase its count by 1
- return hashmap

- Time: O(n) per n elements of each string
- Space: O(n) per using a hashmap as frequencyCounter

*/ 

// Helper function to build a frequency counter 
function frequencyCounter(str) {
    if(str.length === 0) return null; 
    const hashmap = new Map(); 
    for(let i = 0; i < str.length; i++) {
        if(!hashmap.has(str[i])) {
            hashmap.set(str[i], 1); 
        } else {
            hashmap.set(str[i], hashmap.get(str[i]) + 1); 
        }
    }
    return hashmap; 
}

function isAnagram(s, t) {
    // edge case: if length of these 2 strings is not equal there's no point in making a frequencyCounter 
    if(s.length !== t.length) return false; 
    let frequencyStr1 = frequencyCounter(s); 
    let frequencyStr2 = frequencyCounter(t); 
    // iterate over one of the frequencies
    for(let key of frequencyStr1.keys()) {
        if(frequencyStr1.get(key) !== frequencyStr2.get(key)) {
            return false; 
        }
    }
    return true; 
}

// console.log(frequencyCounter("anagram")); // Map { a: 3 }, { n: 1 }, { g: 1 }, { r: 1 }, { m: 1 }
// console.log(frequencyCounter("nagaram")); // Map { n: 1 }, { a: 3 }, { g: 1 }, { r: 1 }, { m: 1 }
// console.log(isAnagram("anagram", "nagaram")); 
// console.log(isAnagram("car", "rat")); 