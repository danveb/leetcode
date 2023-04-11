/* Search a Binary Search Tree (Leetcode #700) 

Problem: Given "root" of a BST and integer "val", find the node 
that equals "val". If such node doesn't exist return null. 

root = [4, 2, 7, 1, 3] val = 2
output = [2, 1, 3] 

root = [4, 2, 7, 1, 3] val = 5 
output = []

                4
            /       \
           2         7
         /   \
        1     3

1. Brute Force 
- start from the root of the binary tree we will check: is current root the target val? 
- 

Algorithm (recursive)
- base case: if root is null we can return null 
- check: if current value of root is < val? 
- we should check right subtree 
- check: if current value of root is > val? 
- we should check left subtree 
- else: we know current value of root is === val 
- so we return root; 

Time: O(log n) for a balanced BST, O(h) for an imbalanced tree 
Space: O(h) where h is height of BST 

*/ 

function searchBST(root, val) {
    // base case: if root is null? we return null
    if(root === null) return null; 
    if(root.val < val) {
        return searchBST(root.right, val); 
    } else if(root.val > val) {
        return searchBST(root.left, val); 
    } else {
        return root; 
    };
};