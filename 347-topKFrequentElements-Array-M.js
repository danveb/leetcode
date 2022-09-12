/* Top K Frequent Elements (Leetcode #347) 

Problem: Given an array "nums" and integer "k", return the "K" most frequent elements. 
Constraint: perform better than O(n log n)

nums = [1, 1, 1, 2, 2, 3] k = 2
output = [1, 2]

nums = [1] k = 1
output = [1]

idx     0   1   2   3   4   5
num     1   1   1   2   2   3
        i                       => Map { 1: 1 }
            i                   => Map { 1: 2 }
                i               => Map { 1: 3 }
                    i           => Map { 1: 3, 2: 1 }
                        i       => Map { 1: 3, 2: 2 }
                            i   => Map { 1: 3, 2: 2, 3: 1 }

sort the map in descending order because we want TOP "K" 
Map { 1:3, 2:2, 3:1 } -> [1,3] 1 appears 3 times
                      -> [2,2] 2 appears 2 times
                      -> [3,1] 3 appears 1 time

Recap
- array of integers "nums" and integer "K", where "K" represents the most frequent elements 
- task: iterate over the array and find "K" most frequent elements and return them 

Notes
- with use of hashmap we want to iterate over input array and check frequency of the elements 
- convert the hashmap to array with ...spread
- sort in descending order (a,b) => b[1] - a[1] 
- iterate over K and push the frequency[i][0] to output []

1. frequencyCounter(array)
- initialize a hashmap as new Map() 
- iterate over input array once (i at 0 until end)
- check: if hashmap DOESN'T have current element at i ?
-- we'll set current element with occurrence of 1
- else: hashmap HAS current element at i 
-- we'll set current element and increase its occurrence by +1 
- return the hashmap 

2. topKFrequent(nums, k) 
- initialize output []
- instantiate frequencyMap of frequencyCounter(nums)
- spread frequencyMap into array 
- manually sort in descending order -> b[1] - a[1] so we have "K" higher 
- iterate from 0 until K and push frequencies[i][0] to []
- return output [] 

Time: O(n log n) where we manually sort the frequencies in descending order 
Space: O(n) we use a hashmap 

*/ 

function topKFrequent(nums, k) {
    // initialize output [] 
    const output = []; 
    // instantiate frequencyCounter of nums 
    let frequencyMap = frequencyCounter(nums); 
    const frequencies = [...frequencyMap]; // [[1,3], [2,2]]
    // sort the frequencies because we want to know top "K" occurrences
    // make sure to sort b[1] because we want [1] to appear higher
    frequencies.sort((a, b) => b[1] - a[1]); 
    for(let i = 0; i < k; i++) {
        output.push(frequencies[i][0]); 
    }
    return output; 
}

// frequencyCounter 
function frequencyCounter(array) {
    const hashmap = new Map();
    for(let i = 0; i < array.length; i++) {
        // check: if hashmap HAS current element at i?
        if(hashmap.has(array[i])) {
            // we'll increase its count by 1
            hashmap.set(array[i], hashmap.get(array[i]) + 1)
        // else: hashmap DOES NOT HAVE current element
        } else {
            // we'll set it to hashmap with count of 1
            hashmap.set(array[i], 1)
        }
    }
    return hashmap; 
}