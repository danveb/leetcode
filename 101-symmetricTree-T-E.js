/* Symmetric Tree (Leetcode #101) 

Problem: Given the root of a binary tree, check whether it's a mirror of itself (symmetric around its center) 

root = [1,2,2,3,4,4,3]
output = true

root = [1, 2, 2, null, 3, null, 3]
output = false 

             1        
         /   |   \    
        2    |    2     => compare 2 vs. 2
      /   \  |   /  \
     3    4  |  4    3  => compare 3 (left) vs. 3 (right)
             |          => compare 4 (right) vs. 4 (left) 

Notes: 
- recursion... 
- we only care about nodes 2-3-4 (left/right subtrees)
- pass in left subtree/right subtree to check if are same tree
- implement helper function to check for sameTree 

Approach
1. isSymmetric(root) 
- base case: if root is null we can deduce it's true 
- recursively check same tree for left subtree, right subtree

2. isSameTree(tree1, tree2) 
- base case: check if any of the trees are null
- return equality comparison between the trees 
- check: if values of tree1 !== tree2 there's no point in checking further 
- return sameTree for tree1.left, tree2.right && tree1.right, tree2.left

Time: O(n) where n is # of nodes we traverse
Space: O(n) for recursion (call stack) 

*/ 

function isSymmetric(root) {
    // check if root is null we return true because it's symmetric 
    if(root === null) return true 
    
    // return isSameTree of left subtree/right subtree after the root (2/2) 
    return isSameTree(root.left, root.right) 
}

// helper function to compare left & right nodes of the tree that is passed (recursively...) 
function isSameTree(tree1, tree2) {
    // base case; check if any of these trees are null
    // we'll return equality comparison between tree1 / tree2
    if(tree1 === null || tree2 === null) return tree1 === tree2; 
    // check values of tree1 / tree2; if NOT equal there's no point of checking anything else. return false
    if(tree1.val !== tree2.val) {
        return false; 
    }
    // check left subtree of tree1 with right subtree of tree2
    // check right subtree of tree1 with left subtree of tree2
    return isSameTree(tree1.left, tree2.right) && isSameTree(tree1.right, tree2.left); 
}; 