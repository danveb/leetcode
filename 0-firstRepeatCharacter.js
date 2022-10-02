/* First Repeat Character

Problem: Given string "str", find the first repeated character. 

str = "whatsapp"
output = "a" 

str = ""
output = -1

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

*/ 

// function characterCounter(str) {
//     const hashmap = new Map(); 
//     for(let i = 0; i < str.length; i++) {
//         if(hashmap.has(str[i])) {
//             hashmap.set(str[i], hashmap.get(str[i]) + 1); 
//         } else {
//             hashmap.set(str[i], 1); 
//         }; 
//     };
//     return hashmap;  
// }; 

// function firstRepeat(str) {
//     // edge case
//     if(str.length === 0) return -1; 
//     let freqCounter = characterCounter(str); 
//     for(let key of freqCounter.keys()) {
//         if(freqCounter.get(key) >= 2) {
//             return key; 
//         }
//     }

//     return -1; 
// }

// console.log(characterCounter("whatsapp")); 
// console.log(firstRepeat("whatsapp")); 
// console.log(firstRepeat("acido")); 

function objCharCounter(str) {
    let obj = {}; 
    for(let i = 0; i < str.length; i++) {
        let current = str[i]
        if(obj[current]) {
            obj[current] += 1
        } else {
            obj[current] = 1
        }
    }
    return obj; 
}

console.log(objCharCounter("whatsapp")); 

function objFirstRepeat(str) {
    let obj = objCharCounter(str); 
    for(let key of Object.keys(obj)) {
        if(obj[key] >= 2) {
            return key;
        }
    }
    return -1;
}

console.log(objFirstRepeat("whatsapp")); 