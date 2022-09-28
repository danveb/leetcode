/* Merge Intervals (Leetcode #56) 

Problem: Given array "intervals", where intervals[i] === [start, end], merge all overlapping intervals and return an array of non-overlapping intervals. 

intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
output = [[1, 6], [8, 10], [15, 18]] 

intervals = [[1, 4], [4, 5]]
output = [[1, 5]] 

0 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|    => start/end points 

   X----X                                                    => [1,3] push current interval into result array
   s1   e1                                                                         
      X----------X                                           => [2,6] start2 (2) conflicts with end1 (3) so we want [1,6]
      s2         e2                                         
                        X----X                               => [8,10] no conflicts with next schedule
                        s3   e3 
                                             X-------X       => [15,18] no conflicts with next schedule 
                                             s4      e4  

[1, 3], [2, 6], [8, 10], [15, 18] 
    e1   s2 e2                     => is end1 >= start2? if so update e1 with e2 
[1, 6]     
    e1          s2  e2             => e1 >= start2? No, so just push interval to result
[1, 6], [8, 10]           
            e1            s2  e2   => e1 >= start2? No, so just push interval to result

result = [[1, 6], [8, 10], [15, 18]] 

Notes
- manually sort the array because the intervals may not be in correct place -> O(n log n) 
- initialize results array []
- push the first interval into results array since it doesn't conflict with any schedule
- iterate over input array (for OF LOOP) 
- initialize end1 pointer as result[result.length-1][1]
- initialize start2 pointer as interval[0] 
- initialize end2 pointer as interval[1] 
- check: if end1 >= start2 we will set end1 as MAX between end1 and end2
- else we push interval into result array
- return result array

Time: O(n) where n is # of elements in input array 
Space: O(1) we don't incur extra memory despite result [] 
Notes: Most likely input array will be sorted already, but in case we need to manually
sort we'll increase Time complexity to O(n log n)

*/

function merge(intervals) {
    // manual sort if needed
    intervals.sort((a, b) => a[0] - b[0]); 
    const result = []; 
    // push first interval into result array since it's already sorted
    result.push(intervals[0]); 

    // iterate over array of intervals 
    for(let interval of intervals) {
        // initialize end1, start2, end2 pointers
        let end1 = result[result.length - 1][1]; 
        let start2 = interval[0]; 
        let end2 = interval[1]; 
        // check if end1 >= start2
        if(end1 >= start2) {
            // get the maximum between end1 and end2 pointers and eventually end2 will be bigger
            result[result.length-1][1] = Math.max(end1, end2); 
        } else {
            result.push(interval); 
        }
    }
    return result; 
}