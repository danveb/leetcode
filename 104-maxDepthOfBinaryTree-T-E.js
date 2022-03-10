/* Leetcode #104: Max Depth Of Binary Tree 

Problem: Given the "root" of a binary tree, return its maximum depth. 
A binary tree's max depth is the number of nodes along the longest path from root -> leaf. 

root = [3, 9, 20, null, null, 15, 7] 
output = 3; starting from root we traverse to right child and the next right child (3: root -> 7: leaf)  

root = [1, null, 2]
output = 2; (1 -> 2) 

Scratchpad: 
                3           => level 1            
              /   \
            9      20       => level 2
                  /  \  
                15    7     => level 3

                1           => level 1
              /   \
            null   2        => level 2

Notes: using "iteration" we perform BFS to count number of levels in the tree 

Approach: 
1. Recursively -> Time: O(n) 
- edge case: if root is null we return 0 (means height of 0) 
- return maximum between (root.left && root.right) + 1 

2. Iteratively -> Time: O(n) 
- edge case: if root is null we return 0 (means height of 0) 
- initialize level/height at 0 (as we traverse the levels we'll increase up to the deepest level) 
- initialize a QUEUE with the root 
- keep iterating while our QUEUE has any elements
- initialize nodeCount as the length of the queue (means we have nodes to visit) 
- keep increasing height by 1
- iterate over nodes to traverse (i at 0 until nodeCount) 
- initialize current as the node shifted from the QUEUE 
- check: if there are any left children we'll push to the QUEUE 
- check: if there are any right children we'll push to the QUEUE 
- return level/height

*/ 

// Recursively 
function maxDepthRecursive(root) {
  // edge case: if root is null we return 0
  if(!root) return 0 
  return Math.max(maxDepthRecursive(root.left) && maxDepthRecursive(root.right)) + 1
}

// Iteratively
function maxDepth(root) {
  if(!root) return 0 
  const queue = [root] 
  let height = 0 
  
  while(queue.length > 0) {
      let nodeCount = queue.length 
      height++ 
      
      // for loop
      for(let i = 0; i < nodeCount; i++) {
          let current = queue.shift() 
          if(current.left !== null) queue.push(current.left) 
          if(current.right !== null) queue.push(current.right) 
      }
  }
  return height; 
}