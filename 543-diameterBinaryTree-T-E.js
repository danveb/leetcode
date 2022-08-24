/* Diamteter of Binary Tree (Leetcode #543) 

Problem: Given "root" of binary tree, return length of diameter of the tree. 
Diameter is the LENGTH of longest path between any 2 nodes (may or may not pass through root) 

root = [1, 2, 3, 4, 5] 
output = 3; 3 is length of path [4,2,1,3] or [5,2,1,3] 

                   1           - initialize maxDiameter at 0 
                /     \        - start DFS at node (4) since LEFT postorder
               2       3       - base case: if node is null we can return 0
             /  \     / \      - node 4 is path 1, node 5 is path 1; maxDiameter is 1 
            4    5   n. n.     - we push maxDiameter of 2 to node 2 
           / \  / \            - check righsubtree and ndoe 3 gives a maxDiameter of 2
          n. n. n. n.          - when we sum maxDiameters we get 3
Notes: 
- DFS Post order traversal LEFT-RIGHT-ROOT 
- start from node 4; check base case if root is null we return 0
- set maxDiameter from currentDiameter (left + right) & maxDiameter 
- return max (left, right) + 1 
- call dfs on the root 
- return maxDiameter 

Approach
- initialize maxDiameter at 0 
- inner function dfs(node)
- base case: if node is null we'll return 0
- instantiate left/right subtrees with dfs
- initialize currentDiameter as left+right (current sum of left path and right path) 
- set maxDiameter as MAX between currentDiameter, maxDiameter 
- return MAX of (left,right) + 1
- call dfs function on root
- return maxDiameter

Time: O(n) where n is # of nodes we visited
Space: O(n) recursion of call stack
 
*/ 

// Time: O(n^2) we visite the nodes at least twice recursively
// Space: O(n) for call-stack
// var diameterOfBinaryTree = function(root) {
//     // base case: if tree is empty we return 0
//     if(root === null) return 0; 
//     // recursively getHeight of left subtree / right subtree
//     let left = getHeight(root.left); 
//     let right = getHeight(root.right); 
//     // recursively get diameter of left subtree / right subtree 
//     let leftDiameter = diameterOfBinaryTree(root.left); 
//     let rightDiameter = diameterOfBinaryTree(root.right); 
//     // Return MAX of the following tree:
//     // 1) Height of left subtree + height of right subtree
//     // 2) Diameter of left subtree, diameter of right subtree
//     return Math.max(left + right, Math.max(leftDiameter, rightDiameter))
// };

// // helper function to getHeight of leftSubtree + rightSubtree 
// function getHeight(node) {
//     // base case: if node is null we return 0
//     if(node === null) return 0; 
//     // return max between maxHeight(left) && maxHeight(right)
//     return Math.max(getHeight(node.left), getHeight(node.right)) + 1; 
// }

// Optimal 
function diameterOfBinaryTree(root) {
    // initialize maxDiameter at 0 
    let maxDiameter = 0; 
    
    // inner function for DFS postorder traversal
    function dfs(node) {
        // base case: if node is null we can return 0
        if(node === null) return 0; 
        // instantiate postorder traversal LEFT - RIGHT - ROOT 
        let left = dfs(node.left); 
        let right = dfs(node.right); 
        // initialize currentDiameter as left+right (THIS IS CURRENT SUM OF LEFT PATH AND RIGHT PATH)
        let currentDiameter = left+right; 
        // set maxDiameter as MAX between currentD, maxD 
        maxDiameter = Math.max(currentDiameter, maxDiameter); 
        // return maximum of left/right 
        return Math.max(left, right) + 1; 
    }
    // call dfs function 
    dfs(root); 
    return maxDiameter; 
}