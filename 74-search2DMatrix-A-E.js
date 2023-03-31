/* Search 2D Matrix (Leetcode #74) 

Problem: Given a "m x n" matrix, each row sorted in increasing order.
Given an integer "target", return true if target is in matrix.
Return false otherwise. 

matrix = [[1,3,5,7], [10,11,16,20], [23,30,34,60]] target = 3
output = true; we can find target at matrix[0][2] 

Key: nested array means at least 2 pointers that traverse 
- i travels []
- j travels within ith [] 

1. Brute Force 
- edge case: if matrix is empty? return false since nothing to check 
- use 2 pointers i/j to check -> i will acccess [], j will access [[]] 
- check: if current element at [j] is target? return true
- return false otherwise 

Time: O(n) where we traverse a nested array looking for target 
Space: O(1) we don't incur extra memory

*/ 

function searchMatrix(matrix, target) {
    // edge case
    if(matrix.length === 0) return false; 
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            // check: is target within matrix[i]? 
            if(matrix[i][j] === target) {
                return true; 
            }
        }
    };
    return false; 
}