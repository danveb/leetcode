/* Right Side Tree BST (Leetcode #199) 

Problem: Given the "root" of a binary tree return the rightmost node of each level. 

Scratchpad: 

Ex. [1, 2, 3, 4, 5, 6, 7] 

                           1        => Level 0: highest node at root is 1
                        /    \
                       2     3      => Level 1: highest node is 3
                     /   \    \  
                    4    5     6    => Level 2: highest node is 6 
                    \    
                    7               => Level 3: highest node is 7

Time: O(n) for n nodes visited in binary tree

Notes
- perform a LEVEL ORDER Traversal (BFS -> QUEUE with shift/push)
- traverse the tree by first checking in the root node 
- by default we want the right-side node so we can use the value of root

Approach 
- edge case: if root is null we return empty array 
- initialize output array 
- initialize queue with root "pushed" in 
- keep looping while queue is NOT empty (has length greater than 0) 
- initilize n for # of nodes in current level (queue.length) 
- push first value of queue into output array ************
- for loop -> iterate over the nodes we have to visit at each level 
- initialize current as the node to be visited 
- check: if there's a right child first ? we push right child
- check: if there's a left child second ? we push left child
- return output array 

*/ 

function rightSideView(root) {
    if(root === null) return [] 
    const output = []
    const queue = [root] 
    while(queue.length > 0) {
        let n = queue.length 
        output.push(queue[0].val)
        for(let i = 0; i < n; i++) {
            let current = queue.shift() 
            if(current.right) queue.push(current.right) 
            if(current.left) queue.push(current.left)
        }
    }
    return output; 
}