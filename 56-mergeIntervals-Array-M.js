/* Merge Intervals (Leetcode #56) 

Problem: Given an array of interval pairs, merge them and return an output array 

intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]                              

    *****                                                   => [1,3] initial interval is pushed to result array [[1, 3]]
      *********                                             => [2,6] overlaps at 2 and runs until 6
                  *****                                     => [8,10] does not overlap so we push this interval to result array
                                          *************     => [15,18] does not overlap so we push this interval to result array 
<-+-+-+-+-+-+-+-+-+-+-+---+---+---+---+---+---+---+---+--->
  0 1 2 3 4 5 6 7 8 9 10  11  12  13  14  15  16  17  18

[1, 3], [2, 6], [8, 10], [15, 18] 
    e1   s2 e2                     => is end1 >= start2? if so update e1 with e2 
[1, 6]     
    e1          s2  e2             => e1 >= start2? No, so just push interval to result
[1, 6], [8, 10]           
            e1            s2  e2   => e1 >= start2? No, so just push interval to result

result = [[1, 6], [8, 10], [15, 18]] 

Approach -> Time: O(n log n) for initial sort in case our input is NOT sorted; we just assume it's sorted for now
- "sort" the intervals by "start" value? intervals.sort((a, b) => a[0] - b[0])
- initialize result array 
- push the first interval to result array
- for let interval of Intervals 
- initialize e1 as result[result.length-1][1]
- initialize s2 as interval[0] 
- initialize e2 as interval[1] 
- if e1 >= s2 ? update e1: result[result.length-1][1] = Math.max(e1, e2) 
- else result.push(interval)
- return result array 

*/ 

function merge(intervals) {
    // do we need to sort? 
    intervals.sort((a, b) => a[0] - b[0]) 
    const result = [] 
    result.push(intervals[0]) 

    for(let interval of intervals) {
        let end1 = result[result.length-1][1] 
        let start2 = interval[0]
        let end2 = interval[1]

        if(end1 >= start2) {
            result[result.length-1][1] = Math.max(end1, end2) 
        } else {
            result.push(interval) 
        }
    }
    return result; 
}

console.log(merge([[1, 3],[2, 6],[8, 10],[15,18]]))