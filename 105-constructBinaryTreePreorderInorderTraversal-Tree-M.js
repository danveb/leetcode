/* Construct Binary Tree from Preorder/Inorder Traversal (Leetcode #105) 

Problem: Given two arrays "preorder" and "inorder", construct and return the binary tree

preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
output: [3,9,20,null,null,15,7]

Scratchpad: 

preorder -> root, left, right [3, 9, 20, 15, 7] 
inorder -> leff, root, right [9, 3, 15, 20, 7]

                   3       
                /    \     
               9     20    
                    /  \   
                   15   7  

PREORDER: 3, 9, 20, 15, 7 
          |  |   |   |   |
        root |   |   |   |
            left |   |   |
                 right subtree

INORDER: 9, 3, 15, 20, 7
         |  |   |   |   |
         | root |   |   |
        left    |   |   |
                everything is right

Approach: 
- we first verbally check if preorder/inorder traversal of binary tree is correct; based on the arrays values are correct. 
- take both traversals and construct the binary tree
- 1. first value of PREORDER traversal is always the root (as we first process root) 
- 2. recursively construct left subtree 
- 3. recursively construct right subtree

*/ 

function buildTree(preorder, inorder) {
    // base case: if no nodes to traverse we return null 
    if(!preorder.length || !inorder.length) return null 
    
    // create the root of binary tree (get from preorder[0])
    let root = new TreeNode(preorder[0])
    // initialize mid and find the index for midpoint 
    let mid = inorder.indexOf(root.val)

    // recursively go root.left 
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid)) 
    // recursively go root.right 
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1)) 
    
    return root; 
}