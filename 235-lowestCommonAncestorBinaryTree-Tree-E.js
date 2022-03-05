/* Lowest Common Ancestor Binary Tree (Leetcode #235) 

Problem: Given a BST "root", find lowest common ancestor of 2 given nodes "P", "Q". 

root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5] p = 2 q = 8 
output = 6; LCA of nodes 2 and 8 is 6 

root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5] p = 2 q = 4
output = 2; LCA of nodes 2 and 4 is 2

root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5] p = 7 q = 9
output = 8; LCA of nodes 7 and 9 is 8

Approach -> Time: O(log n) because of height of tree
         -> Space: O(1) we don't need any data structures 
- if our search nodes are greater than root we should look at right subtree
- if our search nodes are less than root we should look at left subtree 
- if one of search node is greater than root, and one of search node is less than root we know LCA should be the root

Pseudocode: 
- initialize current as the root 
- keep looping while current is NOT null 
- case 1: if values of p & q are greater than current ? we look at right subtree 
- case 2: if values of p & q are less than current ? we look at left subtree 
- case 3: if we find one of the values of p & q we just return current itself

*/ 

function lowestCommonAncestor(root, p, q) {
    // edge case: if no root we can't return anything 
    if(!root) return null 
    let current = root 
    while(current !== null) {
        if(p.val > current.val && q.val > current.val) {
            current = current.right 
        } else if(p.val < current.val && q.val < current.val) {
            current = current.left 
        } else {
            return current; 
        }
    }
}