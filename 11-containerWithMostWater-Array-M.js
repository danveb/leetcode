/* Container with Most Water (Leetcode #11) 

Problem: Given an array "height" of length "n", find two lines that finds the container with most water. 
Return max amount of water the container can store. 

height = [1, 8, 6, 2, 5, 4, 8, 3, 7] 
output = 49; 7 X 7 

Scratchpad: 
idx     0   1   2   3   4   5   6   7   8
num     1   8   6   2   5   4   8   3   7   => L/R because we want width as MAX as possible 
        L                               R   => 1 vs. 7; area is 1 * 8 = 8
            L                           R   => 8 vs. 7; area is 7 * 7 = 49
            L                       R       => 8 vs. 3; area is 8 * 6 = 42
            L                   R           => 8 vs. 8; area is 8 * 5 = 40; shift LEFT better 
                L               R           => 6 vs. 8; area is 6 * 5 = 30
                    L           R           => 2 vs. 8; area is 2 * 3 = 6
                        L       R           => 5 vs. 8; area is 5 * 2 = 10
                            L   R           => 4 vs. 8; area is 4 * 1 = 4
                                L/R         => loop breaks (start < end) 

Time: O(n) per n number of elements 
Space: O(1) as we don't need additional space 

Notes:
- area of a rectangle = length * width 
- (j - i) is the distance between 2 index * min(height[i], height[j]) 
- 2 pointer approach where start at 0 and end will be end of the array 

Approach: 
- initialize start at 0 
- initialize end at end of array 
- initialize max at 0 
- keep looping while start < end 
- initialize width as end - start 
- initialize length as MINIMUM between height[start], height[end] 
- initialize area as length * width 
- to get the max, get maximum between max & area 
- check: if height[start] < height[end] ? 
- increase start++ 
- else decrease end-- 
- return max; 

*/ 

function maxArea(height) {
    let start = 0
    let end = height.length - 1
    let max = 0
    while(start < end) {
        let width = end - start 
        let length = Math.min(height[start], height[end]) 
        let area = length * width 
        max = Math.max(max, area) 

        // move pointers if start < end
        if(height[start] < height[end]) {
            start++
        } else {
            end--
        }
    }
    return max; 
}