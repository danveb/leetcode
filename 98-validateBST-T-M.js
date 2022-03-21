/* Validate Binary Search Tree (Leetcode #98)

Problem: Given a binary tree determine whether it's a BST 

array = [5, 1, 7, 3, 8]   
output = false; node 3 is false since the value is smaller than its parent and root node

Scratchpad: 

                          5       => min: null / max: null since we're in root node 
                        /   \
min: null / max: 5 <=  1     7    => min: 5 / max: null (could be anything since we haven't checked its children) 
                           /   \
min: 5 / max: 7 <=        3    8   => min: 5 / max: null 

Time Complexity: O(n) we make 2 comparisons (2n) for left/right subtrees 

Explanation: 
1. Decide on the return value
We also have to know whether the left and right subtrees are valid BSTs. We get this from subtree return values.

2. Identify states
To determine whether the substree rooted at the current node is a BST or not, we need to know the range (min, max value) the current node value is allowed to be in.
Having decided on the state and return value we can now write the DFS.
There are n nodes and n - 1 edges in a tree so if we traverse each once then the total traversal is O(2n - 1) which is O(n).

Approach: 
1. isValidBst(root) 
- edge case: if root is null we return true 
- return isValid helper function with (tree, -Infinity, Infinity) 

2. isValid(node, min, max) 
- edge case: if node is null we return true 
- check: if node.val < min || node.val >= max ? 
- return false 
- return isValid(node.left, min, node.val) && isValid(node.right, node.val, max) 

*/ 

function isValidBST(root) {
    if(root === null) return true 
    return isValid(root, -Infinity, Infinity) 
}

function isValid(node, min, max) {
    if(node === null) return true 
    if((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false 
    return isValid(node.left, min, node.val) && isValid(node.right, node.val, max) 
}