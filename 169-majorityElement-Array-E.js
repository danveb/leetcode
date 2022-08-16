/* Majority Element (Leetcode #169)

Problem: Given an array "nums" of size "n" return the majority element. 
The element should appear more than [n/2] times. 
Assume majority element always exists 

nums = [3, 2, 3] 
output = 3 because this number appears more than half the times 

idx     0   1   2
num     3   2   3
        i           => hashmap.set(3, 1 occurrence); is this greater than half? no
            i       => hashmap.set(2, 1 occurrence); is this greater than half? no
                i   => hashmap.set(3, 2nd occurrence); is this greater than half? yes 

- initialize half as length of array / 2
- initialize hashmap as new Map() 
- iterate over input array once 
- check if hashmap HAS current element
- if hashmap has current element we will add current element and increase its counter by getting hashmap.get(nums[i]) + 1
- else, just add current element with counter 1 
- check: if hashmap.get(nums[i]) > half ? return nums[i] 

Time: O(n) as we iterate input array once 
Space: O(n) as we use a hashmap to store data

*/

function majorityElement(nums) {
    // edge case: if length is 1 we just return first element
    if(nums.length === 1) return nums[0]; 
    let half = nums.length / 2; 
    const hashmap = new Map(); 
    for(let i = 0; i < nums.length; i++) {
        if(!hashmap.has(nums[i])) {
            hashmap.set(nums[i], 1); 
        } else {
            hashmap.set(nums[i], hashmap.get(nums[i]) + 1); 
        }
        if(hashmap.get(nums[i]) > half) {
            return nums[i];
        }
    }
    return -1; 
}

console.log(majorityElement([3,2,3]))