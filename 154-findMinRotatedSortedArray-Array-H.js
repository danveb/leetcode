/* Find Min in Rotated Sorted Array II (Leetcode #154) 

Problem: Given sorted rotated array "nums" that may contain duplicates, return minimum element of this array. Always grab the minimum in the array. 

nums = [1, 3, 5]
output = 1

nums = [2, 2, 2, 0, 1]
output = 0 

idx     0   1   2   3   4
num     2   2   2   0   1   => MIN = Infinity 
        i                   => 2 <= MIN; MIN = 2
            i               => 2 <= MIN; MIN = 2
                i           => 2 <= MIN; MIN = 2
                    i       => 0 < MIN; MIN = 0
                        i   => 1 > MIN; skip 

1. Brute Force 
- keep track of min as Infinity (later to be changed) 
- iterate over input array once 
- check: if current element <= MIN ? set MIN = current element
- return MIN 

Time: O(n) where n is length of input array 
Space: O(1) we don't incur extra memory

function findMin(nums) {
    let min = Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= min) {
            min = nums[i]; 
        }
    };
    return min; 
}

===

idx     0   1   2   3   4
num     2   2   2   0   1
        L       M       R   => M >= R so we know LEFT IS SORTED
                    LM  R   => M is lowest

2. Can we do better for O(log n)? 
- we know the array has been rotated and there's a left/right side that is always going to be sorted since ROTATED


*/ 