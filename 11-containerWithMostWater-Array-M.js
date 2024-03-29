/* Container With Most Water (Leetcode #11) 

Problem: Given an array "height" of length "n", find two lines that 
together form a container, such that the container contains the most water. 
Return the max amount of water a container can store. 

height = [1, 8, 6, 2, 5, 4, 8, 3, 7] 
output = 49; max area is 7 * 7 

Goal: find the maximum area -> width * high (height) 
high -> MIN(height[j], height[i])
width -> j - i 
area -> high * width 
max -> MAX area, max 

1. Brute Force 
- edge case: if height array is empty? return 0
- use a 2 pointer approach (i, j) where we know i at 0, j at i + 1 
- calculate high, width, area, max 
- return max 

Time: O(n^2) where we perform a nested for loop (i, j)
Space: O(1) we don't incur extra memory 

function maxArea(height) {
    // initialize max at 0
    let max = 0; 
    // iterate over input array once 
    for(let i = 0; i < height.length; i++) {
        // iterate again, but j at i + 1 
        for(let j = i + 1; j < height.length; j++) {
            // calculate... 
            // distance = j - i 
            // h = min between height[j], height[i] 
            // area = distance * h
            // max = MAX between max and area 
            let distance = j - i; 
            let h = Math.min(height[j], height[i]); 
            let area = distance * h; 
            max = Math.max(area, max); 
        }
    };
    // return max 
    return max; 
};

=== 

idx     0   1   2   3   4   5   6   7   8
num     1   8   6   2   5   4   8   3   7   => max at 0, width = R idx - L idx, length = min(R[idx], L[idx]), area = w * l, max = max(max, area)
        L                               R   => width = 8-0 = 8, length = 1, area = w * l = 8, max = 8
            L                           R   => width = 8-1 = 7, length = 7, area = w * l = 49, max = 49
            L                       R       => width = 7-1 = 6, length = 3, area = w * l = 18, max = 49
            L                   R           => width = 6-1 = 5, length = 8, area = w * l = 40, max = 49

Given: 
- we have an array of size "n"
- need to find maxArea, whcih is amount of water the container can store
- area of rectangle = length * width OR (end - start) * min(height[end], height[start])
- using 2 pointers we'll calculate from the ends and try to meet them in center so we can get the max amount
- need to handle moving start or end pointer based on whichever the smaller value it is 

Approach: 
- initialize max at 0 
- initialize 2 pointers; left at 0; right at end of array 
- keep iterating the input array (while left < right)
- initialize width as right-left 
- initialize length as MIN(L, R) 
- initialize area as width * length
- set max as MAX(max, area)
- check: if height[left] < height[right] we'll move left++ 
- else: move right-- 
- return max

Time: O(n) where n is # of elements 
Space: O(1) we don't incur extra memory

*/ 

function maxArea(height) {
    let max = 0; 
    let left = 0;
    let right = height.length - 1; 
    while(left < right) {
        let width = right - left; 
        let length = Math.min(height[left], height[right]); 
        let area = width * length; 
        // set max now 
        max = Math.max(area, max); 

        if(height[left] < height[right]) {
            left++; 
        } else {
            right--
        }
    }
    return max; 
}; 