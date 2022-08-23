/* Balanced Binary Tree (Leetcode #110) 

Problem: Given "root" of a binary tree, determine if it's height balanced. 

root = [3, 0, 20, null, null, 15, 7] 
output = true 


            3               => height root to left subtree = 2
         /     \
       9        20          => height root to right subtree = 3
              /    \
             15     7       => right - left = 1 so balanced

root = [1, 2, 2, 3, 3, null, null, 4, 4] 
output = false 

            1               => height root to left = 4
         /     \    
        2       2           => height root to right = 1
      /   \
     3     3                => left - right = 3 so unbalanced
   /   \
  4    4

root = []
output = true

Notes
- A balanced binary tree either is an empty tree, or both its subtree are balanced and has a max height difference of 1
- implement POSTORDER traversal of tree DFS

Approach 
1.getHeight(node) 
- helper function to calculate height of binary tree 
- base case: if node is null we return 0
- return MAX getHeight(node.left), getHeight(node.right) + 1

2. isBalanced(root) 
- edge case: if root is null we return true 
- recursively instantiate left/right subtrees 
-- left = getHeight(node.left)
-- right = getHeight(node.right) 
- check both left/right subtrees equal to -1 || Math.abs(right-left) > 1 
- final check: return false as it's an unbalanced binary tree

Time: O(n) where n is # of nodes we visit 
Space: O(n) using recursion to visit n # of nodes

*/

function isBalanced(root) {
    // base case: if root is null we can just return true 
    if(root === null) return true; 
    // invoke helper function for left/right subtrees
    let left = getHeight(root.left); 
    let right = getHeight(root.right); 
    // check: if absolute value of left - right <= 1 && isbalanced(root.left) && isBalanced(root.right) return true
    if(Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)) {
        return true; 
    }
    // final check: return false
    return false; 
}

// helper function for getHeight
function getHeight(node) {
    // base case: if node is null we retur 0 as there's no height 
    if(node === null) return 0; 
    // return max between getHeight(left), getHeight(right)
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1; 
}