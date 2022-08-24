/* Validate Binary Search Tree (Leetcode #98)

Problem: Given a binary tree determine whether it's a BST 
Valid bst -> left subtree contains nodes < root 
          -> right subtree contains nodes > root 
          -> both left/right subtrees are valid BST

root = [5, 1, 7, 3, 8]   
output = false; node 3 is false since the value is smaller than its parent and root node

root = [2, 1, 3]
output = true

                          5       => min: null / max: null since we're in root node 
                        /   \
min: null / max: 5 <=  1     7    => min: 5 / max: null (could be anything since we haven't checked its children) 
                           /   \
min: 5 / max: 7 <=        3    8   => min: 5 / max: null 

Notes
- BST: left subtree < root; right subtree > root 
- perform DFS recursion with inner function (-Infinity, Infinity) to check root 

Time: O(n) where n is # of nodes visited 
Space: O(n) for recursion call stack

*/ 

function isValidBST(root) {
    // inner function for DFS and pass 3 parameters
    function dfs(root, min, max) {
        // base case: if root is null we always return true 
        if(root === null) return true; 
        // check values of left (min) and right (max) 
        if(root.val >= max || root.val <= min) {
            return false; 
        } 
        // return dfs recursive 
        // - left will have left, min, value of root
        // - right will have right, value of root, max
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max); 
    }
    // return dfs with 3 arguments
    return dfs(root, -Infinity, Infinity); 
}