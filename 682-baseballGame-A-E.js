/* Baseball Game (Leetcode #682)

Problem: Given an array of strings "operations", return the sum of all 
scores on the record after applying all the operations. 
- Integer: X
- "+": sum of previous two scores 
- "D": double the previous score 
- "C": remove from the record 

ops = [5, 2, C, D, +]
- 5: add 5 to record [5]
- 2: add 2 to record [5, 2]
- C: remove previous score (2) [5]
- D: double previous score (5*2) [5, 10]
- +: sum of previous scores (15) [5, 10, 15] 
-> total sum = 5+10+15 = 30 

1. Brute Force 
- initialize a stack [] 
- iterate over input array (i at 0 until end) so we can traverse entire array 
- if current element is typeof number? we'll push to stack 
- if current element is "C" we will pop element from stack 
- if current element is "D" we will double previous element from stack and push it to stack 
- if current element is "+" we will get the sum of two previous elements 
- return total sum of all elements in stack 

Time: O(n) where n is length of operations array
Space: O(n) we use stack[] 

*/

function calPoints(operations) {
    let totalSum = 0; 
    const stack = []; 
    for(let i = 0; i < operations.length; i++) {
        let current = operations[i]; 
        if(current === "C") {
            stack.pop(); 
        } else if(current === "D") { 
            let element = stack[stack.length - 1]; 
            stack.push(element * 2);
        } else if(current === "+") {
            let firstElement = stack[stack.length -1];
            let secondElement = stack[stack.length -2]; 
            stack.push(firstElement + secondElement); 
        } else {
            stack.push(Number(current)); 
        }
    };
    for(let i = 0; i < stack.length; i++) {
        totalSum += stack[i]; 
    };
    return totalSum; 
}