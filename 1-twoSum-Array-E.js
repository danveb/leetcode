/* Two Sum (Leetcode #1) 

- Given an array of integers "nums" and "target" 
- return indices of two numbers so they add up to target 
- exactly one solution 
- return the answer in any order 

nums = [2, 7, 11, 15] target = 9
output = [0 ,1] because 2 + 7 === 9 

nums = [3, 2, 4] target = 6 
output = [1, 2] because 2 + 4 === 6 

Brute Force 
- start looping the array once 
- add another for loop to go through the array one more time 
- check: if the first item + second item meet up to the target we can return its indices 
- Time O(n^2): we loop through the array twice 
- Space O(1) we don't need any additional data structures 

idx 0   1   2
num 3   2   4
    i   j       => i === 3; j === 2; sum = 5 
    i       j   => i === 3; j === 4; sum = 7 
        i   j   => i === 2; j === 4; sum = 6 meets target 

Pseudocode 
- initialize a for loop (starts from 0 until the end) 
- initalize a 2nd for loop (starts at 1 until the end) 
- check: if nums[i] + nums[j] === target we can return it 

===

Optimal 
- initialize hashmap as new Map 
- iterate over the array once 
- initialize difference as target - nums[i] 
- check: if hashmap.has(difference) we know we have found the other pair 
- check: if hashmap doesn't have the difference we are going to add it to the hashmap and continue to loop 
- Time O(n): we loop over the array once 
- Space O(n) we use a hashmap (data structure) 

idx 0   1   2 
num 3   2   4
    i           => i === 3; difference is 6 - 3; we'll just add 3 to hashmap 
        i       => i === 2; difference is 6 - 2; we'll just add 2 to hashmap
            i   => i === 4; difference is 6 - 4; hashmap has difference of 2; return it

*/ 

// function twoSum(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j] 
//             }
//         }
//     }
// }

// console.log(twoSum([3,2,4], 6)); 
// console.log(twoSum([2,7,11,15], 9)); 

function twoSum(nums, target) {
    const hashmap = new Map(); 
    for(let i = 0; i < nums.length; i++) {
        let difference = target - nums[i] 
        if(hashmap.has(difference)) {
            return [hashmap.get(difference), i]; 
        } else {
            hashmap.set(nums[i], i); 
        }
    }
}

console.log(twoSum([3,2,4], 6)); 
console.log(twoSum([2,7,11,15], 9)); 