/* Find All Duplicates in Array (Leetcode #442) 

Problem: Given array "nums" of length "n" where range [1,n], each 
element appears once or twice. Return an array of integers that 
appears twice. 

CLUE -> array is 1-indexed as its range is [1, n] 

nums = [4, 3, 2, 7, 8, 2, 3, 1] 
output = [2, 3]

nums = [1, 1, 2]
output = [1] 

nums = [1]
output = []

Constraints: 
- Time: O(n) 
- Space: O(1) 

idx     0   1   2   3   4   5   6   7
num     4   3   2   7   8   2   3   1
        i   j                           => i !== j; move on
        i       j                       => i !== j; move on
        i           j                   => i !== j; move on
        i               j               => i !== j; move on
        i                   j           => i !== j; move on
        i                       j       => i !== j; move on
        i                           j   => i !== j; move on
            i   j                       => i !== j; move on
            i       j                   => i !== j; move on
            i           j               => i !== j; move on
            i               j           => i !== j; move on
            i                   j       => i === j; push 3 to array 
            i                       j   => i !== j; move on
                i   j                   => i !== j; move on
                i       j               => i !== j; move on
                i           j           => i === j; push 2 to array 
                i               j       => i !== j; move on
                i                   j   => i !== j; move on
                    i   j               => i !== j; move on
                    i       j           => i !== j; move on
                    i           j       => i !== j; move on
                    i               j   => i !== j; move on
                        i   j           => i !== j; move on
                        i       j       => i !== j; move on
                        i           j   => i !== j; move on
                            i   j       => i !== j; move on
                            i       j   => i !== j; move on
                                i   j   => i !== j; move on

Recap
- input is integer array "nums" not necessarily in ascending order 
- need to find duplicates and return them in an array 

Brute Force 
- edge case: if input array is empty we'll return [] 
- initialize output array as empty array 
- iterate over input array once (i at 0 until end)
- iterate again over the input array (j at i + 1 until end)
- check: if current element at i is === current element at j? we know it's a duplicate so we can push current element to array 

Time: O(n^2) as we iterate twice over input array 
Space: O(n) as we use an output array to store values 

function findDuplicates(nums) {
    // edge case: if nums array is empty we return []
    if(nums.length === 0) return []
    // result [] 
    const result = []
    // iterate i at 0 until end 
    for(let i = 0; i < nums.length; i++) {
        // iterate j at i + 1 until end 
        for(let j = i + 1; j < nums.length; j++) {
            // check: if current element at i === current element at j? we know it's duplicate
            if(nums[i] === nums[j]) {
                // push nums[j] ! 
                result.push(nums[j]); 
            }; 
        }
    }
    // return result []
    return result; 
}

=== 

idx     0   1   2   3   4   5   6   7
num     4   3   2   7   8   2   3   1
        i                               => add to hashset; Set { 4 }
            i                           => add to hashset; Set { 4, 3 }
                i                       => add to hashset; Set { 4, 3, 2 }
                    i                   => add to hashset; Set { 4, 3, 2, 7 }
                        i               => add to hashset; Set { 4, 3, 2, 7, 8 }
                            i           => hashset has (2) so we'll push this to output [] 
                                i       => hashset has (3) so we'll push this to output []
                                    i   => add to hashset; Set { 4, 3, 2, 7, 8, 1 }

Better Time Complexity 
TRICK: as we iterate over input array we'll mark visited elements and turn them to negative. If we traverse an element that has been visited (turned to negative) we know it's a duplicate
- same edge case 
- initalize output array as empty [] 
- initialize a hashset as new Set() 
- iterate once over input array 
- check: if hashset DOES NOT HAVE current element[i] we'll add to hashset 
- else: it means hashset HAS current element[i] so we'll instead push to output array 
- return output array 

Time: O(n) where n is length of input array 
Space: O(n) we use a hashset and output array for extra memory

function findDuplicates(nums) {
    if(nums.length === 0) return [];
    const hashset = new Set(); 
    const result = []; 
    for(let i = 0; i < nums.length; i++) {
        if(!hashset.has(nums[i])) {
            hashset.add(nums[i]); 
        } else {
            result.push(nums[i]); 
        };
    };
    return result; 
}

===

idx     1   2   3   4   5   6   7   8
num     4   3   2   7   8   2   3   1
        i                               => value 4 points to idx 7; we'll convert it to negative 7 (mark as visited)
                    
        4   3   2   -7   8   2   3   1
            i                               => value 3 points to idx 3; we'll conver to negative 2 (visited)

        4   3   -2   -7   8   2   3   1
                i                           => value -2 to abs value of 2 that points to idx 2; convert to negative 3 (visited)

        4   -3   -2   -7   8   2   3   1
                       i                    => value -7 to abs value of 7 that points to idx 7; convert to negative 3 (visited)

        4   -3   -2   -7   8   2   -3   1
                           i                => value 8 points to idx 8; we'll convert to negative 1 (visited)
                            
        4   -3   -2   -7   8   2   -3   -1
                               i            => value 2 points to index 2, which is -3 (already visited because it's negative)-> push to output
                                    
        4   -3   -2   -7   8   2   -3   1
                                    i       => value -3 to abs value of 3 that points to idx 3; which is -2 (already visited)-> push to output
                                        


Optimal Time Complexity 
- same edge case
- CLUE: keep track of indices as address and we'll visit each address and for those visited we'll convert them to negative
- if we visit an address with a negative number we know we have previously visited 

Time: O(n) where n is length of input array
Space: O(1) even though we use an output array but we don't use a hashset or any data structure

*/

function findDuplicates(nums) {
    if(nums.length === 0) return []; 
    const output = [];
    for(let i = 0; i < nums.length; i++) {
        // initialize idx as Absolute value of current element -1 (gets correct idx for 1-idx array)
        let idx = Math.abs(nums[i]) -1; 
        // initialize val as current element at idx
        let val = nums[idx]; 
        // check: if val is < 0? checking for negative numbers
        if(val < 0) {
            // we know it's a negative and duplicate! we'll push to output
            output.push(Math.abs(nums[i])); 
        } else {
            // set nums[idx] to negative 
            nums[idx] = -nums[idx] 
        }
    }
    return output; 
}