/* Leetcode #100: Same Tree 

Problem: Given the roots of 2 binary trees "p" and "q", write a function to check if they're same or not. 
Two binary trees are same if structurally identical and nodes have same value. 

p = [1, 2, 3] q = [1, 2, 3] 
output = true 

p = [1, 2] q = [1, null, 2] 
output = false 

p = [1, 2, 1] q = [1, 1, 2] 
output = false 

Scratchpad: 
                1           => level 1            
              /   \
            2      3       => level 2

                1           => level 1            
              /   \
            2      3       => level 2

Notes: using "recursion" 
- first check if null? 
- are they different? 
- isSame(right, right) && isSame(left, left) 

*/ 

function isSameTree(p,q) {
    // check if node we're on is null
    if(p === null || q === null) {
        return p === q
    }
    
    // check the values
    if(p.val !== q.val) {
        return false 
    }
    
    // use recursion on the children
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left) 
}