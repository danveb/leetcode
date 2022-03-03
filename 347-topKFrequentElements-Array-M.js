/* Top K Frequent Elements (Leetcode #347) 

Problem: Given array "nums" and "K", return top "K" most frequent elements. 

nums = [1, 1, 1, 2, 2, 3] k = 2
output = [1, 2]; 1 appears 3 times, 2 appears 2 times 

Approach: 
- use a hashmap to count frequency of elements that appears on array 
- as we iterate each element we'll check hashmap and "SET" key/value pairs (# is key / frequency is value) 
- we can sort frequencies to get top "K" most frequent elements 

Pseudocode: 
1. implement hashmap that counts frequencies 
- edge case? if array is empty we'll return [] 
- initialize output as empty array 
- initialize hashmap as new Map() 
- iterate over "nums" array once (i at 0 until end) 
- check: if hashmap has current element, we'll increase its frequency (VALUE) by 1
- else: if hashmap does not have current element we should set to hashmap with frequency of 1

2. sort frequencies and push to array 
- initialize frequencies and spread hashmap (key/values) to array 
- sort in descending order 

3. iterate over frequencies to find top "K" 
- for loop (i at 0 until K) 
- push result[i][0] to output 
- return output 

*/

function topKFrequent(nums, k) {
    if(nums.length === 0) return [] 
    const output = [] 
    const hashmap = new Map() 
    for(let i = 0; i < nums.length; i++) {
        if(hashmap.has(nums[i])) {
            // use HASHMAP.GET(KEY) + 1 to increase frequency! 
            hashmap.set(nums[i], hashmap.get(nums[i]) + 1)
        } else {
            hashmap.set(nums[i], 1) 
        }
    }

    // sort frequencies 
    const frequencies = [...hashmap] // [[1,3], [2,2], [3,1]] 
    frequencies.sort((o1, o2) => {
        if(o1[1] === o2[1]) {
            return o2[0] - o1[0]
        } else {
            return o2[1] - o1[1] 
        }
    })

    // get top "K" from frequencies 
    for(let i = 0; i < k; i++) {
        output.push(frequencies[i][0])
    }
    return output; 
}

console.log(topKFrequent([1,1,1,2,2,3], 2)) // [1, 2]