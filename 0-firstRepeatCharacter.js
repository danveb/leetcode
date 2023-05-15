/* First Repeat Character

Problem: Given string "str", find the first repeated character. 

str = "whatsapp"
output = "a" 

str = ""
output = -1

===

1. Brute Force 
- take 2 for loops (i and j) and loop over the string 
- check: if current (str[i]) is equal to str[j] we know it's a repeat 
- we can return the repeat character 
- else... we return -1 

Time: O(n^2) where we perform a nested for loop (i and j pointers iterating over string twice) 
Space: O(1) we don't incur extra memory for data structures 

function firstRepeat(str) {
    for(let i = 0; i < str.length; i++) {
        let current = str[i]; 
        for(let j = i + 1; j < str.length; j++) {
            // check if str[i] === str[j]
            if(current === str[j]) {
                return current; 
            }
        }
    };
    return -1; 
}

=== 

2. Optimal Approach
- to avoid nested for loop we can implement a data structure... HASHMAP to count number of occurrences of each character 

function characterCounter(str) {
    const hashmap = new Map(); 
    for(let i = 0; i < str.length; i++) {
        if(hashmap.has(str[i])) {
            hashmap.set(str[i], hashmap.get(str[i]) + 1); 
        } else {
            hashmap.set(str[i], 1); 
        }; 
    };
    return hashmap;  
}; 

function firstRepeat(str) {
    // edge case: if str is empty? we return -1 rightaway 
    if(str.length === 0) return -1; 
    // initialize frequencyCounter 
    let freqCounter = characterCounter(str); 
    // iterate over the key of keys() 
    for(let key of freqCounter.keys()) {
        // check: is key >= 2? meaning it's a repeat 
        if(freqCounter.get(key) >= 2) return key; 
    };
    return -1; 
}

Notes
1. build characterCounter given the input string 
- initialize a hashmap 
- iterate over input string once (i at 0 until end) 
- check: if hashmap has current element? we'll increase its occurrence by 1
- check: if hashmap doesn't have current element we'll set to hashmap and make it occurrence of 1
- return the hashmap 

2. main function
- edge case: if input string is empty we'll just return -1 
- instantiate hashmap with the characterCounter
- For OF loop with keys of characterCounter
- check: if characterCounter.get(keys) >= 2 ? we'll return the key 
- return -1

Time: O(n) where n is length of input string 
Space: O(n) we use a hashmap as frequency counter 

*/ 

function charCounter(str) {
    const hashmap = new Map(); 
    for(let i = 0; i < str.length; i++) {
        // !hashmap.has
        if(!hashmap.has(str[i])) {
            hashmap.set(str[i], 1); 
        // hashmap.has
        } else {
            hashmap.set(str[i], hashmap.get(str[i]) + 1); 
        };
    }; 
    return hashmap; 
}; 

function firstRepeat(str) { 
    // edge case: if string is empty? return -1 rightaway 
    if(str.length === 0) return -1; 
    // instantiate freqCounter 
    let freqCounter = charCounter(str); 
    // iterate over the keys of freqCounter 
    for(let key of freqCounter.keys()) {
        // check: if key is >= 2? it means it's a repeat 
        if(freqCounter.get(key) >= 2) {
            return key; 
        }
    }; 
    return -1; 
};

console.log(firstRepeat("whatsapp")); // a
console.log(firstRepeat("macbook")); // o