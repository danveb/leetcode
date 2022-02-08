/* Letter Combinations of Phone Number (Leetcode #17)

Problem: Given a phone number that contains 2-9, find all possible letter combinations the phone number could translate to 

Scratchpad: 

digits = '23' -> 'abc' & 'def' 
given the string we can form: ['ad', 'ae', 'af', 'bd', 'be', 'be', 'bf', 'cd', 'ce', 'cf']

                2
                []
         /      |      \
        a       b       c
     /  |  \   / \ \    \ \ \   
3   ad ae af  bd be bf  cd ce cf  

Approach: 
- build a map of digits; key: number; value: 'str' 
- initialize an output array 
- use a DFS approach to go root-to-leaf path for each combination 
- pass a recursive function to hit base case (leaf node) where i is equal to length of input
- perform a linear operation and push to result
- go back to the next item

Time: O(4^n * n) 
Space: O(4^n * n) 

*/ 

function letterCombinations(digits) {
    // initialize global result empty array 
    const result = [] 

    // build a HASHMAP
    const map = {
        '2': 'abc', 
        '3': 'def', 
        '4': 'ghi', 
        '5': 'jkl', 
        '6': 'mno', 
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    // DFS recursive helper 
    function dfs(i, digits, slate) {
        // base case: 
        if(i === digits.length) {
            result.push(slate.join(''))
            return; 
        }
        
        // dfs recursive case:
        let chars = map[digits[i]] 
        
        // for loop
        for(let char of chars) {
            slate.push(char) 
            // call recursive and increase i by 1
            dfs(i + 1, digits, slate) 
            slate.pop() 
        }
    }    
    
    dfs(0, digits, [])
    return result; 
};

console.log(letterCombinations('23'))