/* Leetcode #242: Valid Anagram

Problem: Given 2 strings (str1, str2) return true if str2 is anagram of str1. 
Return false if NOT anagram. 

str1 = 'anagram' str2 = 'nagaram' 
output = true 

str1 = 'rat' str2 = 'car' 
output = false 

Scratchpad: 
str1 a   n   a   g   r   a   m  => Map {a : 3, n : 1, g : 1, r: 1, m : 1}
str2 n   a   g   a   r   a   m  => Map {n : 1, a : 3, g : 1, r: 1, m: 1}

Time: O(n) 
Space: O(n) 

Notes: implement frequency counter for str1/str2
- main check: if str1 and str2 don't have same length we should return false 
- create frequencyCounter for str1/str2 
- iterate over the keys of str1Frequency 
- check: if size of the maps are different we should return false 
- check: if str2Freq.get(keys) !== str1Freq.get(keys) we should return false 
- else return true as we found they're valid anagram

FrequencyCounter function (str) 
- initialize JS MAP() as it has constant add/has/delete
- iterate each letter of the str
- variable that holds letterCount 
- check: if map contains str1[i] return true; then delete it from map 
- else: add the letter to the map 

*/ 

function frequencyCounter(str) {
    const frequencies = new Map() 
    for(let letter of str) {
        let letterCount = frequencies.get(letter) || 0
        frequencies.set(letter, letterCount + 1)
    }
    return frequencies 
}

function isAnagram(str1, str2) {
    if(str1.length !== str2.length) return false 
    const str1Freq = frequencyCounter(str1)
    const str2Freq = frequencyCounter(str2)
    for(let key of str1Freq.keys()) {
        if(str2Freq.get(key) !== str1Freq.get(key)) {
            return false 
        }
    }
    return true; 
}