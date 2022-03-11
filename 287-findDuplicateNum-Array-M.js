/* Find Duplicate Number (Leetcode #287) 

Problem: Given an array "nums" containing "n + 1" integers where each integer 

nums = [1, 3, 4, 2, 2] 
output = 2 

nums = [3, 1, 3, 4, 2] 
output = 3 

Approach (brute force) -> Time: O(n) / Space: O(n) for hashset 
- initialize a hashset as new Set() 
- 

Scratchpad: 
idx     0   1   2   3   4   
num     1   3   4   2   2   => construct a linked list based on the idx and array
        1                   => at index 0 we have node 1; node 1 points to 3
            3               => at index 1 we have node 3; node 3 points to 2 
                    2       => at index 3 we have node 2; node 2 points to 4 
                4           => at index 2 we have node 4; node 4 points to 2 
                        2   => at index 4 we have node 2; node 2 CYCLES to node 4
                        
        1 -> 3 -> 2 -> 4 -> 2 
        S    S    S    S    S 
        F         F         F
                            F
        

Approach (optimal) -> Time: O(n) / Space: O(1) 
- consider as a Linked List cycle problem where we have a slow/fast pointer and eventually slow/fast pointers meet, meaning there is a cycle
- initialize slow at 0 
- initialize fast at 0 
- while TRUE 
- set fast as nums[nums[fast]] -> goes 2x 
- set slow as nums[slow] -> goes 1x 
- check: if fast === slow? 
- initialize pointer at 0 
- inner while loop: pointer !== slow 
- set pointer as nums[pointer] -> goes 1x 
- set slow as nums[slow] -> goes 1x
- return pointer; 

*/ 

var findDuplicate = function(nums) {
    let slow = 0
    let fast = 0
    while(true) {
        fast = nums[nums[fast]] 
        slow = nums[slow] 
        if(slow === fast) {
            let pointer = 0
            while(pointer !== slow) {
                pointer = nums[pointer]
                slow = nums[pointer] 
            }
            return pointer; 
        }
    }
};