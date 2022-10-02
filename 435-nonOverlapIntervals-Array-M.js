/* Non-overlapping Intervals (Leetcode #435) 

Problem: Given array of intervals [start, end], return minimum number 
of intervals we need to remove to make rest of intervals non-overlap. 

intervals = [[1,2], [2,3], [3,4], [1,3]] 
output = 1; we can remove [1,3] interval; rest is non-overlap 

|
|                   s e -> start/end
|       *--*    => [3,4]
| *-----*       => [1,3] 
|    *--*       => [2,3]
| *--*          => [1,2]
|
__|__|__|__|__|___
  1  2  3  4  5   
  
Notes
- interval [1,3] is overlapping so we can remove this one 
- manually sort input array by b values-> O(n log n) 
- initialize count at 0
- initialize prev at 0
- iterate over intervals from 1 until end 
- initialize currentInterval as intervals[i]
- check: if currentInterval[0] < intervals[prev][1] ? increase count++ 
- else: set prev = i
- return count

Time: O(n log n) if we have to manually sort in ascending order 
Space: O(1) we don't incur extra memory

*/ 

function eraseOverlapIntervals(intervals) {
    // manually sort input array by second values in ascending order
    intervals.sort((a,b) => a[1] - b[1]); 
    let count = 0;
    let prev = 0;
    for(let i = 1; i < intervals.length; i++) {
        let current = intervals[i]; 
        if(current[0] < intervals[prev][1]) {
            count++ 
        } else {
            prev = i;
        }
    };
    return count; 
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // 1