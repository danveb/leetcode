/* Lowest Common Ancestor Binary Tree (Leetcode #235) 

Problem: Given a BST "root", find lowest common ancestor of 2 given nodes "P", "Q". 

root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5] p = 2 q = 8 
output = 6; LCA of nodes 2 and 8 is 6 

                   6                => 6 is LCA
                /     \  
         (p)   2       8    (q) 
             /  \     /  \
            0    4    7  9
               /  \
              3    5

                   6    
                /     \  
               2       8    
             /  \     /  \
            0    4    7  9
               /  \
          (p) 3    5 (q)  => 4 is LCA

root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5] p = 2 q = 4
output = 2; LCA of nodes 2 and 4 is 2

root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5] p = 7 q = 9
output = 8; LCA of nodes 7 and 9 is 8

Notes
- recursive approach 
- start at root and we notice p & q are less than root node; so by binary search we know it'll be in left subtree 
- if both p.val & q.val < root node we'll traverse to the left subtree 
- if both p.val & q.val > root node we'll traverse to the right subtree 
- return the lowest common ancestor

Time: O(n) where n is # of nodes we visit 
Space: O(n) recursive call stack 

*/ 

function lowestCommonAncestor(root, p, q) {
    // base case: if root is null we return null; 
    if(root === null) return null;
    // check: if value of p is < value of root && value of q is < value of root ? we know we have to check left subtree recursively 
    if(p.val < root.val && q.val < root.val) {
        // recurse to left subtree 
        return lowestCommonAncestor(root.left, p, q); 
    // check: if value of p is > value of root && value of q is > value of root ? we know we have to check right subtree recursively
    } else if(p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q); 
    } else {
        return root; 
    }
}